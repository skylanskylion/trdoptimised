import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Live_Details} from "./live_details";
import * as firebase from 'firebase';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';
//import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";
//import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { Live_Top_Details } from './live_top_details';


@Injectable()
export class FirebaseServiceService {   
    live_details: AngularFireList<Live_Details[]>;
    public now: Date = new Date();
    ld: any;

    private dbPath = '/live-updates';
    private dbPath_for_iages = '/iages-live-updates';
    private dbPath_Main = '/live-updates-main'
    private dbPath_top = '/live-updates-top';
    private dbPath_homepage_video = '/home-page-videos'

    customersRef: AngularFireList<Live_Details> = null;
    IagescustomerRef : AngularFireList<Live_Details> = null ; 
    customersMainRef: AngularFireList<Live_Details> = null;
     customersReftop: AngularFireList<Live_Top_Details> = null
     customerVideoRef : AngularFireList<any> = null ; 


    constructor(private db: AngularFireDatabase) {
        AngularFireModule.initializeApp(environment.firebase)
        this.customersRef = db.list(this.dbPath);
        this.IagescustomerRef = db.list(this.dbPath_for_iages); 
        this.customersMainRef = db.list(this.dbPath_Main);
         this.customersReftop = db.list(this.dbPath_top);
         this.customerVideoRef = db.list(this.dbPath_homepage_video)

    }
 createCustomerTop(customer: Live_Top_Details): void {
        this.customersReftop.push(customer);
    }
    createCustomer(customer: Live_Details): void {
        this.customersRef.push(customer);
    }
    IagescreateCustomer(customer: Live_Details): void {
        this.IagescustomerRef.push(customer);
    }
    createMainCustomer(customer: Live_Details): void {
        this.customersMainRef.push(customer);
    }

    createVideoCustomer(customer: any) : void {
        this.customerVideoRef.push(customer);
    }

    onGetVideoDocuments() {
        return this.db.list('/home-page-videos').snapshotChanges()
                .map((changes) => {
                    return changes.map((data) => {
                        return data;
                    });
                })
                // .switchMap((usersId: string[]) => {
                //     return Observable.combineLatest(usersId.map((u) => {
                //         return this.onGetUserDocuments(u);
                //     }))
                // })
    }
    onGetUserDocuments(customer: string) {
        return this.db.list('/live-updates').snapshotChanges()
                .map((changes) => {
                    return changes.map((data) => {
                        return data;
                    });
                })
                // .switchMap((usersId: string[]) => {
                //     return Observable.combineLatest(usersId.map((u) => {
                //         return this.onGetUserDocuments(u);
                //     }))
                // })
    }
    onGetUsersDocumentsMain() {
        return this.db.list('/live-updates-main').valueChanges()
            .map((changes) => {
                return changes.map((data) => {
                    return data;
                });
            })
            // .switchMap((usersId: string[]) => {
            //     return Observable.combineLatest(usersId.map((u) => {
            //         return this.onGetUserDocuments(u);
            //     }))
            // })
            
    }

    onGetUsersDocuments() {
        return this.db.list('/live-updates').valueChanges()
            .map((changes) => {
                return changes.map((data) => {
                    return data;
                });
            })
            // .switchMap((usersId: string[]) => {
            //     return Observable.combineLatest(usersId.map((u) => {
            //         return this.onGetUserDocuments(u);
            //     }))
            // })
            
    }
    onGetUsersDocuments_for_Iages() {
        return this.db.list('/iages-live-updates').valueChanges()
            .map((changes) => {
                return changes.map((data) => {
                    return data;
                });
            })
            // .switchMap((usersId: string[]) => {
            //     return Observable.combineLatest(usersId.map((u) => {
            //         return this.onGetUserDocuments(u);
            //     }))
            // })
            
    }

    // onGetUsersDocuments() {
    //     return this.db.list('/live-updates').snapshotChanges()
    //         .map((changes) => {
    //             return changes.map((data) => {
    //                 return data.payload.key
    //             });
    //         })
    //         .switchMap((usersId: string[]) => {
    //             return Observable.combineLatest(usersId.map((u) => {
    //                 return this.onGetUserDocuments(u);
    //             }))
    //         })
            
    // }
}
