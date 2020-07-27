import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase'; 
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
//import {Store} from '@ngrx/store';
//import {NewConsultationRemainder, NewNotification, NewQuestionNotification} from './models/notification';
//import {AddNotification, ConsultationRemainderAdd, QuestionNotificationAdd} from './actions/notification';
//import * as fromRoot from './reducers';
//import {CurrentPatientService} from './current-patient.service';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);
  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth) {
  }

  updateToken(token, fdb) {
    let ftoken = {};
    ftoken[token] = token;
    console.log("in firetoken");
   // const lostruser = JSON.parse(localStorage.getItem('currentUser'));
    fdb.object('/fcmtokens/').update(ftoken).catch().then(res => {
      console.log('sent token to databse');
      console.log(res);
      localStorage.setItem('trddpmdoctorfcmtoken', JSON.stringify(ftoken));
    }).catch((err) => {
      console.log('Unable to set token in DB.', err);
    });
  }

  getPermission() {
    console.log('in request permission');
    if (this.db && ( localStorage.getItem('trddpmdoctorfcmtoken') == null)) {
      console.log('not null and dont have token');
      this.generateAndSendTokenToServer(this.db);
    } else {
      console.log('not starting permission alredy have token');
    }}
  generateAndSendTokenToServer(fdb) {
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        this.updateToken(token, fdb);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("new message received. ", payload);
      const NotificationOptions = {
              body: payload.notification.body,
              data: payload.data,
              icon: payload.notification.icon
            }
            navigator.serviceWorker.getRegistration('/firebase-messaging-sw.js').then(registration => {
              console.log('Notified' , registration);
              registration.showNotification(payload.notification.title, NotificationOptions);
            });
      this.currentMessage.next(payload);
  })
}

  // receiveMessage() {
  //   const lostruser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.messaging.onMessage((payload) => {
  //     console.log('Message received. ', payload);
  //     console.log(payload['data']);
  //     if (payload['data']['app'] === 'dpmd') {
  //       switch (payload['data']['type']) {
  //         case '_consultation':
  //           this.pushPatient.changetok(payload['data']);
  //           if (payload['data']['doctor_id'] === lostruser['userinfo'][0]['doctor_id_c']) {
  //             if (payload['data']['consult_type'] === 'video') {
  //               console.log('video consult call');
  //               const token = payload['data']['token'];
  //               const booking_id = payload['data']['booking_id'];
  //               const session_id = payload['data']['session'];
  //               const patient_name = payload['data']['pat_name'];
  //               this.router.navigate(['/recepient']);
  //             } else if (payload['data']['consult_type'] === 'tele') {
  //               console.log('tele consult call coming');
  //               this.router.navigate(['/recepient']);
  //             }
  //           }
  //           this.currentMessage.next(payload['data']);
  //           break;
  //         case '_booking':
  //           alert('booking notification coming...');
  //           if (payload['data']['doctor_id_c'] === lostruser['userinfo'][0]['doctor_id_c']) {
  //             // tslint:disable-next-line:max-line-length
  //             this.store.dispatch(new AddNotification([new NewNotification(payload['data']['doctor_id_c'], payload['data']['booking_type'], payload['data']['booking_id'], payload['data']['pat_img'], payload['data']['appoinment_date'], payload['data']['start_time'])]));
  //           }
  //           this.currentMessage.next(payload['data']);
  //           break;
  //         case '_todayconsultreminder':
  //           if (payload['data']['doctor_id_c'] === lostruser['userinfo'][0]['doctor_id_c']) {
  //             // tslint:disable-next-line:max-line-length
  //             this.store.dispatch(new ConsultationRemainderAdd([new NewConsultationRemainder(payload['data']['doctor_id_c'], payload['data']['booking_type'], payload['data']['booking_id'], payload['data']['pat_img'])]));
  //           }
  //           this.currentMessage.next(payload['data']);
  //           break;
  //         case '_questions':
  //           if (payload['data']['doctor_id_c'] === lostruser['userinfo'][0]['doctor_id_c']) {
  //             // tslint:disable-next-line:max-line-length
  //             this.store.dispatch(new QuestionNotificationAdd([new NewQuestionNotification(payload['data']['doctor_id_c'], payload['data'][' pat_image'], payload['data']['pat_name'], payload['data']['patient_id_c'], payload['data']['q_id'])]));
  //           }
  //           this.currentMessage.next(payload['data']);
  //           break;
  //         default:
  //           console.log('in default same');
  //       }
  //     }
  //   });
  // }
}
