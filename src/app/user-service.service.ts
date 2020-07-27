import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, ResponseContentType} from '@angular/http';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Details} from './Details';
import { Feed } from './model/feed';
import {Observable} from "rxjs/internal/Observable";
//import {throwError as observableThrowError} from "rxjs/index";
import {throwError as observableThrowError, throwError} from 'rxjs';
import {User} from './log-in-contribution/log-in-contribution.component'


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable()
export class UserServiceService {
  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
    private api_url = 'https://therightdoctors.com/api/beta/article';
    private api_key = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
  constructor(private http: Http, private hc: HttpClient) {
  }
    /*presentation login*/
    login(data) {
        console.log(data);
        var email = data['email'];
        console.log(email);
        var password = data['password'];
        console.log(password);
        return this.http.get('https://therightdoctors.com/api/beta/doctor-article/login/'+email+'/'+password+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response: Response) => response.json());
    }


    login1(data) {
        console.log(data);
        var email = data['email'];
        console.log(email);
        var password = data['password'];
        console.log(password);
        return this.http.get('https://therightdoctors.com/api/beta/image/user/authentication/'+email+'/'+password+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response: Response) => response.json());
    }


    check_mail(email){
        return this.http.get('https://therightdoctors.com/api/beta/verify_mail/'+email+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response: Response) => response.json());
    }

    register(data) {
        return this.http.post('https://therightdoctors.com/api/beta/doctor-article/presentation/signup?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':data}, this.jwt()).map((response: Response) => response.json());
    }

   

    register1(data) {
        return this.http.post('https://therightdoctors.com/api/beta/image/user?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':data}, this.jwt()).map((response: Response) => response.json());
    }
    get_videos(){
        return this.http.get('https://therightdoctors.com/api/beta/article?event=wccmm-mumbai-2019&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&is_live=true');
    }

    get_mailer_info(){
        return this.http.get('https://therightdoctors.com/api/beta/article/mailer/data?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4',this.jwt()).map((response: Response) => response.json());    }

    get_videos_wccmm(){
        return this.http.get('https://therightdoctors.com/api/beta/article?event=rssdi-jaipur-2019&category=the-interview&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&is_live=true');
    }

    get_presentation_all() {
        const final_url = 'https://therightdoctors.com/api/beta/image?type=presentation&event=wccmm-mumbai-2019&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
        console.log(final_url);
        return this.http.get(final_url);
      }

    create(course: Details) {
        return this.http.post('https://therightdoctors.com/api/beta/interview-appointment/add/angular?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
            course, this.jwt()).map((response: Response) => response.json());
    }
    // the_last_word_iages() {
    //     return this.http.get('https://therightdoctors.com/api/beta/article?category=one-more-thing&event=iages-guwahati-2020&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&limit=10');
    //   }

    slot_details(id) {
    return this.http.get('https://therightdoctors.com/api/beta/interview-appointment/edit/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }

    get_draft_from_id(id){
        console.log('Service call --- >' , id); 
        return this.http.get('https://therightdoctors.com/api/beta/qc/get-draft/single-page/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg' , this.jwt()).map((response: Response)=> response.json());
      }
    getSingleDoctorDetailsForTranscriptByCme(id) {
        return this.http.get('https://therightdoctors.com/api/beta/transcript-cme/edit/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
        }
        
    getSingleDoctorDetailsForTranscriptByPodCast(id) {
            return this.http.get('https://therightdoctors.com/api/beta/transcript-podcast/edit/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
         }
    getSingleDoctorDetailsForTranscriptByDoctorName(id) {
            return this.http.get('https://therightdoctors.com/api/beta/transcript-doctorname/edit/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
       }
    sendEmailForTranscriptEdit(data){
        return this.http.post('https://therightdoctors.com/api/beta/mail-to-edit/rssdi-doctor-details?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': data}).map((response: Response) => response);
       
    }
    getDataForKnowledPartner(){
var id =10;
        return this.http.get('https://therightdoctors.com/api/beta/article/get-details-for-kp/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }

    getDataForIages2020Presentations(){
        var id =10;
                return this.http.get('https://therightdoctors.com/api/beta/article/get-details/iages-presentations/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
            }
        getDataForKnowledPartnerEvents(){
var id =10;
        return this.http.get('https://therightdoctors.com/api/beta/article/get-details-for-kp-events/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }
    getDataForKnowledPartnerPharma(id){
        console.log("Sending Id for Pharma Details : "+id);
                return this.http.get('https://therightdoctors.com/api/beta/article/get-details-for-kp-pharma/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
            }
    getData_interviewed_docs(){
        return this.http.get('https://therightdoctors.com/api/beta/article/get-details-of/interviewed-docs?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());

    }
    getData_articles(){
        return this.http.get('https://therightdoctors.com/api/beta/article?category=cme&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());

    }
    sendEmailForInterviewVideoEdit(id,url){
        return this.http.get('https://therightdoctors.com/api/beta/mail-to-edit-interview-video/'+id+'/'+url+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
       
    }
    get_day_wise_updates(){
        return this.http.get('https://therightdoctors.com/api/beta/article?day_wise_update=true&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4g', this.jwt()).map((response:Response) => response.json());
    }

    send_email_doc(model,email, slug) {
        return this.http.post('https://therightdoctors.com/api/beta/article_email/email_sending_wccmm/'+email+'?slug='+ slug +'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',model)
    }
    covid_interview(model){
        console.log("moedl is"+model);
        return this.http.post('https://therightdoctors.com/api/beta/covid-interview/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model}).map((response: Response) => response)
    }
    coronavirus_story(model) {
        alert("moedl is"+model);
        return this.http.post('https://therightdoctors.com/api/beta/send-coronavirus-story/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model}).map((response: Response) => response)
    }


    send_kp1_form_data(model) {
        console.log("moedl is"+model);
        return this.http.post('https://therightdoctors.com/api/beta/send-kp1-data/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model}).map((response: Response) => response)
    }
    send_kp_form_data(model) {
        console.log("moedl is"+model);
        return this.http.post('https://therightdoctors.com/api/beta/send-kp1-data/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model})
    }
    kp_event_get_id_for_form(id){
        console.log("User Id is" + id); 
        return this.http.get('https://therightdoctors.com/api/beta/send-kp-userid/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }
    // update_details(data, patient_id_c) {
    //     console.log(data);
    //    const url = 'https://therightdoctors.com/api/beta/opm/patient/update/details/' + patient_id_c + '?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    //    return this.hc.put(url, {'json': data});
    //    }

    send_email_event(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_event_wise?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }

    send_email_event_for_kp(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_knowledge_partner?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    save_newsletters(model){
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/save/newsletters?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})

    }

    send_email_event_for_presentation(model,id) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email/iages/presentation/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_event_for_kp_with_response_mailer_link(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_knowledge_partner_resp?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_event_for_kp_with_response_mailer_link_proposal(model){
        console.log("In service call" )
        let x = JSON.stringify(model);
        console.log(x)
        return this.http.post('https://therightdoctors.com/api/beta/send_email_knowledge_partner_resp/proposal?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_event_for_kp_with_response_mailer_link_last_minute(model){
        console.log("In service call" )
        let x = JSON.stringify(model);
        console.log(x)
        return this.http.post('https://therightdoctors.com/api/beta/send_email_knowledge_partner_resp_last_minute?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }

    send_email_event_for_kp_pharma(model){
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_knowledge_partner-pharma?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_for_inteview(model){
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send-email/interview?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_blogs(model){
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send-email-blog?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    AddNewUserIfNotExists(user) {
        return this.http.post('https://therightdoctors.com/api/beta/doctorRegistration/doctor?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
          user).map((response: Response) => response.json());
      }
     
    
       //Updating password after auto registration of doctors
       updatePasswordAfterAutoRegistration(finaljson, id) {
        return this.http.put('https://therightdoctors.com/api/beta/doctorRegistration/doctor/passwordReset/' + id +'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':finaljson}).map((response: Response) => response.json());
      }

    send_email_special_event(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_special_event_wise?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    single_podcast1(event,slug)
    {
        console.log('event in serviec',event);
        console.log('slug in service',slug);
        const final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
        console.log('finalurl',final_url);
        return this.http.get(final_url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working
                // either remove it or add the line below (return ...)
                console.log(' I CAN SEE DATA HERE: ', data.json());
                return data.json();
            }).catch(error => throwError(error.json()));

      /* return this.http.get('https://therightdoctors.com/api/beta/article/' + slug + '?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4');*/
        /*return this.http.get('https://therightdoctors.com/api/beta/article?event=' + event + '&slug=' + slug + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4',this.jwt()).map((response: Response) => response.json());*!/*/
    }
    send_email_special(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_special?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_from_db(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_special_event_wise_db?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_doctor(model, name) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_email_doctor_wise?name='+name+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_email_newsletter(model){
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send-email-newsletter?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    podcast_audio_files_cor(){
        //  alert('event in rest api-main'+event);
          return this.http.get('https://therightdoctors.com/api/beta/article?category=podcast&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=15',
              this.jwt()).map((response: Response) => response.json());
      }

      feature() {
        return this.http.get('https://therightdoctors.com/api/beta/article?category=feature&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&limit=20');
      }

      get_single_video(slug, catagory) {
        console.log('in article service single video');
        const final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
        console.log(final_url);
        return this.http.get(final_url)
          .map(data => {
            data.json();
            // the console.log(...) line prevents your code from working
            // either remove it or add the line below (return ...)
            console.log(' I CAN SEE DATA HERE: ', data.json());
            return data.json();
          }).catch(error => throwError(error.json()));
      }
    
 send_img_presentation_email(model)
    {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_presetation_email?name='+name+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    send_podcast_email(model) {
        let x = JSON.stringify(model);
        return this.http.post('https://therightdoctors.com/api/beta/send_podcast_email?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':x})
    }
    
  token=localStorage.getItem('token');

  user:User= {
    'name':'',
    'email':'',
    'amount':null,
    'country':'',
    'mobile':null,
    password:'',
    'period':null,
    'expiry':null
  }

  saveUser(user:User,token:any){
    this.user=user;
    localStorage.setItem("name",user.name);
      localStorage.setItem("email",user.email);
      localStorage.setItem("mobile",user.mobile.toString());
      // localStorage.setItem("amount",this.user.amount.toString());
      localStorage.setItem("country",user.country);
    localStorage.setItem('token',token);
  }
  MauticgetContacts(team){
    return this.http.get('https://therightdoctors.com/api/beta/mautic/getContacts/'+ team +'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
  }
  MauticaddContact(obj:any,team){
    this.http.post('https://therightdoctors.com/api/beta/mautic/addContact'+ team+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',obj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }
  sendNotification(data){
      return this.http.post('https://therightdoctors.com/api/beta/live-update/notification?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data).subscribe( 
          res => {
              console.log(res)
          }
      )
  }
  offUser(){
    this.user.name='';
    this.user.email='';
    this.user.amount=null;
    this.user.mobile=null;
    this.user.password='';
    this.user.country=null;
  }

  login_contribution(user:any): any{
    console.log(user.email);
    return this.http.post('https://therightdoctors.com/api/beta/contribution/getUser?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',user);
  }

  setToken(token : string){
    localStorage.setItem('token',token);
  }
      addUser(user:any): any {
    console.log(user.name);
    return this.http.post('https://therightdoctors.com/api/beta/contribution/addUser?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',user);

  }
  stateData(){
       return this.http.get('https://therightdoctors.com/api/beta/statecases?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
  }



    update_slot(course, id) {
        let x = JSON.stringify(course)
        return this.http.put('https://therightdoctors.com/api/beta/interview-appointment/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
            {'json':x}, this.jwt()).map((response: Response) => response.json());
    }


    ///SALESFORCE CODE

    get_rest_access() {
        return this.hc.get('https://therightdoctors.com/api/beta/salesforce/access_token?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4');
    }
    live_streaming(model){
        console.log("moedl is"+model);
        return this.http.post('https://therightdoctors.com/api/beta/live-streaming/data?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model}).map((response: Response) => response)
    }
    get_stream_data(id){
        return this.http.get('https://therightdoctors.com/api/beta/get-live-streaming/data/'+id +'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')

    }

    get_access(){
        console.log('get_access');
        // const data = {'grant_type':'password','client_id':'3MVG99S6MzYiT5k8sYCzo_yr1ezgaI51LWSUJiNtzt9VKJpygVfmfEj8ANWsxOVLpnWRniMYozlvvn2AjZiT_','client_secret':'5290441282586257315','username':'bt@therightdoctors.com.doctors','password':'rssditvwock1239uWtpKjykP3DhViK9KeXb8to'};
        // let params = new HttpParams(data);
        // let options = { params: params };

        let headers = new HttpHeaders({
            'Content-Type':'application/x-www-form-urlencoded',
        });
        let options2 = {
            headers: headers
        };
        return this.hc.post('https://login.salesforce.com/services/oauth2/token','grant_type=password&client_id=3MVG9ZL0ppGP5UrBEMov_vI1kHXhgvYuzzJoUckV7KRQzgXur7uaX.dQonmiquoWHndzZwIQl.nL1Ti.UBqr9&client_secret=2625444622905574035&username=bt@therightdoctors.com&password=Theloudestvoice123!!!FSdsq4dsYRA4JI07QGHpR4KP8',options2);
    }

    get_sales(access_token, stringURL){
        console.log('get_sales');
        console.log(Date.now());

        let headers = new HttpHeaders({
            'Authorization':'Bearer '+access_token
        });


        let options = { headers: headers };
        console.log(headers);
        //query?q=SELECT+Name+from+Contact+WHERE+Is_Approved__c=falseLastModifiedDate+>+2018-11-22T08:10:43Z+AND+
        return this.hc.get(stringURL, options);
    }

    post_sales(access_token,data){
        console.log('post_sales');
        console.log(Date.now());
        let headers = new HttpHeaders({
            'Authorization':'Bearer '+access_token
        });
        let options = { headers: headers };
        return this.hc.post("https://ap7.salesforce.com/services/data/v43.0/sobjects/Contact",data,options);
    }


    get_dash(){
        console.log('get_dash');
        return this.hc.get('https://therightdoctors.com/api/beta/doctor-info?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }

    post_dash(data) {
        console.log('post_dash');
        return this.hc.put('https://therightdoctors.com/api/beta/doctor-info/'+ data['slug'] +'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
    }
    /*----------------------------------------Team B-------------------------------------------------
    ---------------------------------Changes made on 17/6/19------------------------------------------*/
    update_output(output) {
        //console.log('in article service single video hai',);
        let data = JSON.stringify(output);
        alert('Mail with following details are being sent');
        console.log('this is nice')
        const final_url = 'https://therightdoctors.com/api/beta/article_email/email_sending?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this.http.put(final_url, {'json': data})
            .map(data => {
                data.json();
                console.log(' I CAN SEE DATA HERE put req: ', data.json());
                return data.json();
            })
    }
    registration(user) {
        return this.hc.post('https://therightdoctors.com/api/beta/subscriber/new_polling_user?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': user});

    }
    //---------------------------------Changes made on 01/7/19------------------------------------------*/
    doc_info2(data){
        //alert(data);
        return this.hc.post('https://therightdoctors.com/api/beta/doc_info3?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':data});
    }
    send_mail(data, slug, opt){
        //alert(data);
        
        return this.hc.post('https://therightdoctors.com/api/beta/send_mail_doctor_contacts/' + slug + '?token=trd_token&option='+ opt.option +'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':data});
    }
    //-----------------------------------------------------------------------------------------------
    get_slug(slug){
        console.log('get_slug');
        return this.hc.get('https://therightdoctors.com/api/beta/doctor-info/'+slug+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }

    ////SALESFORCE CODE ENDS HERE



create_slot_without_event(course: Details) {
        return this.http.post('https://therightdoctors.com//api/beta/interview-appointment/add/slot-we?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
            course, this.jwt()).map((response: Response) => response.json());
    }


update_slot_without_event(course, id) {
        let x = JSON.stringify(course)
        return this.http.put('https://therightdoctors.com/api/beta/interview-appointment-update-slot-we/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
            {'json':x}, this.jwt()).map((response: Response) => response.json());
    }
   // update_one_doctor_for_transcript_by_cme

//    return this._http.put(final_url, {'json': data})
//    .map(data => {
//        data.json();
//        console.log('I CAN SEE DATA HERE put req: ', data.json());
//        return data.json();
//    }).catch(error => observableThrowError(error.json()));

    update_one_doctor_for_transcript_by_cme(data, id) {
        var x =JSON.stringify(data);
        return this.http.put('https://therightdoctors.com/api/beta/edit-transcript-cme/edit/' + id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}).map((response:Response) => response.json());
      }
      create_new_draft(model){ 
        console.log('Service call' , model); 
        return this.http.post('https://therightdoctors.com/api/beta/qc/create-new-draft?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': model}).map((response:Response) => response.json());
      }
      update_one_doctor_for_transcript_by_podcast(data, id) {
        var x =JSON.stringify(data);
        return this.http.put('https://therightdoctors.com/api/beta/edit-transcript-podcast/edit/' + id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}).map((response:Response) => response.json());
    }
      update_one_doctor_for_transcript_by_doctorInfo(data, id) {
        var x =JSON.stringify(data);
        return this.http.put('https://therightdoctors.com/api/beta/edit-transcript-doctorname/edit/' + id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': x}).map((response:Response) => response.json());
    }

    /*polling functions*/
    poll(data) {
        return this.http.post('https://therightdoctors.com/api/beta/subscriber/poll?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json':data}, this.jwt()).map((response: Response) => response.json());
    }
    verification_code_send(phone,country_code){
        const data={
            "country_code":country_code,
            "phone_number":phone,
            "via":"sms",
            "locale":"en"
        };
        return this.http.post('https://msg.therightdoctors.com/api/verification/start',data).map((response: Response) => response.json());
    }
    verification_code_send2(phone,country){
        var data={
            "country_code":country,
            "phone_number":phone,
            "via":"sms",
            "locale":"en"
        };
        return this.http.post('https://msg.therightdoctors.com/api/verification/start',data).map((response: Response) => response.json());
    }
    

    //polls verification code
    submit_form(model){
        
    }
    verify_code(token,phone){
        const data={
            "country_code":"+91",
            "phone_number":phone,
            "token":token
        };
        return this.http.post('https://msg.therightdoctors.com/api/verification/verify3',data).map((response: Response) => response.json());
    }
    //presentation verification code
    verify_code2(token,country,phone,email){
        var data={
            "country_code":country,
            "phone_number":phone,
            "token":token,
            "email":email
        };
        return this.http.post('https://msg.therightdoctors.com/api/verification/verify2',data).map((response: Response) => response.json());
    }
    changeImage(URL: string, p_id: number) {
        var data = {'photo1': URL};
        const setUrl: string = 'https://therightdoctors.com/api/beta/subscriber/poll_users/image/' + p_id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
        return this.http.put(setUrl, data);
      }

    profile_update(data, p_id) {
        console.log('hi');
        return this.http.put('https://therightdoctors.com/api/beta/subscriber/poll_users/profile_update/' + p_id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': data})
        .map(data => {
            data.json();
            console.log(' I CAN SEE DATA HERE put req: ', data.json());
            return data.json();
        })
      }

     profile(p_id) {
         return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_users/profile/'+p_id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
     }
    poll_questions(today) {
        return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_questions/' + today + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',this.jwt()).map((response: Response) => response.json());
    }
    mail_checking(email) {
        return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_users/'+email+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }

    doctor_details_post(data) {
        let x = JSON.stringify(data);
        return this.http.post('https://therightdoctors.com/api/beta/angular/doctor-info?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}).map((response:Response) => response.json());
    }

    mail_checking_login(email,password) {
        return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_users_login/'+email+'/'+password+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }
    mail_checking_details(email) {
        return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_users_details/'+email+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }
    mail_checkingadd(email) {
        return this.http.put('https://therightdoctors.com/api/beta/subscriber/poll_users_update/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': email}, this.jwt()).map((response:Response) => response.json());
    }

    update_unsubscribe(slug, data) {
        let x = JSON.stringify(data);
        return this.http.put('https://therightdoctors.com/api/beta/angular/doctor-info/'+slug+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}, this.jwt()).map((response:Response) => response.json());
    }

    update_salesforce_doctor(slug, data) {
        let x = JSON.stringify(data);
        return this.http.put('https://therightdoctors.com/api/beta/angular/salesforce/doctor-info/'+slug+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}).map((response:Response) => response.json());
    }

    rssdi_solts(date, event) {
        return this.http.get('https://therightdoctors.com/api/beta/interview-appointment/uniquelist/'+date+'/'+event+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }

    poll_quiz_questions() {
        return this.http.get('https://therightdoctors.com/api/beta/subscriber/poll_quiz_questions?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',this.jwt()).map((response: Response) => response.json());
    }

    rssdi_send_invitation(slug, data) {
        let x = JSON.stringify(data);
        return this.http.post('https://therightdoctors.com/api/beta/send-rssdi-slot-booking-page?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': x}).map((response:Response) => response.json());
    }

    mobile_add(email){
        return this.http.post('https://therightdoctors.com/api/beta/subscriber/poll_users_mobile_add/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': email}, this.jwt()).map((response:Response) => response.json());
    }

    set_verification_flag(id) {
        return this.http.put('https://therightdoctors.com/api/beta/subscriber/poll_users_set_verification_flag/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response:Response) => response.json());
    }

    /*end of polling functions*/

    //forgot password
    reset_password(email) {
        return this.http.get('https://therightdoctors.com/api/beta/presentation/forgot/password/' + email + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',this.jwt()).map((response: Response) => response.json());
    }
    updatePasswords(data, email) {
        return this.http.put('https://therightdoctors.com/api/beta/presentation/update/passwords/' + email + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
            {'json':data}, this.jwt()).map((response: Response) => response.json());
    }

    subscribe_mail(email) {
    return this.http.post('https://therightdoctors.com/api/beta/subscriber/subscribe_mail/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&token=trd_token', {'json': email}, this.jwt()).map((response:Response) => response.json());
  }

    getCountries() {
        return this.http.get('https://therightdoctors.com/api/beta/country?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response: Response) => response.json());
    }
 // rssidtv-service
 

  getrss(slug: string) {
    return this.http.get(this.rssToJsonServiceBaseUrl + slug)
        .map(this.extractFeeds)
        .catch(this.handleError);
  }
  send_live_updates_to_queue(model){
    alert("Scheduled at " + model['f_date']);
    return this.http.post('https://therightdoctors.com/api/beta/article/live/update/pipeline?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{'json': model})
}
call_scheduler(){
    return this.http.get('https://therightdoctors.com/api/beta/article/live/update/schedule?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',{})
}
add_questions(data ,firstname , lastname , sessionname , topicname , polltime){
    console.log("entered services", data); 
    return this.http.post('https://therightdoctors.com/api/beta/subscriber/polling_questions_add/'+firstname+'/'+lastname+'/'+sessionname+'/'+topicname+'/'+polltime+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':data});
  }
  add_questions_coronavirus(data ,name , email){
    console.log("entered services", data); 
    return this.http.post('https://therightdoctors.com/api/beta/subscriber/polling_questions_add_covid/'+name+'/'+email+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':data});
  }
    submit_survey_details(event){
        console.log('survey details', event);
        let data = JSON.stringify(event);
        return this.http.post('https://therightdoctors.com/api/beta/survey_details?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4', {'json':data} ,
            this.jwt()).map((response: Response) => response.json());
    }


    podcast_audio_files(event){
        console.log('event in rest api', event);
        return this.http.get('https://therightdoctors.com/api/beta/article?category=podcast&event='+event+'&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4',
            this.jwt()).map((response: Response) => response.json());
    }
getData() {
            console.log('i m here !')
            return this.http.get('https://therightdoctors.com/api/beta/covid-19-cases?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
          }
    all_podcast_audio_files(){

        return this.http.get('https://therightdoctors.com/api/beta/article?category=podcast&event=wccmm-mumbai-2019&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4');
      }
      update_mailer_list(event, category, data) {
        return this.http.post( 'https://therightdoctors.com/api/beta/news/'+event+'/'+category+'/'+data+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data, this.jwt()).map((response: Response) => response.json());
        }
        send_email_test(slug,period,time,start_date,end_date,c_day) {
            return this.http.get('https://therightdoctors.com/api/beta/send_periodic_email/'+slug+'/'+period+'/'+time+'/'+start_date+'/'+end_date+'/'+c_day+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
        }

        get_slugs(){
            return this.http.get('https://therightdoctors.com/api/beta/get_slugs/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
        }

        update_ae_database(sd,ed,p,c,t,cd){
            return this.http.get('https://therightdoctors.com/api/beta/update_ae_database/'+sd+'/'+ed+'/'+p+'/'+c+'/'+t+'/'+cd+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
        }
        gethier() {
            return this.http.get('https://therightdoctors.com/api/beta/conditional?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
        }

    single_podcast(event,slug)
    {
        console.log('event in serviec',event);
        console.log('slug in service',slug);
        const final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
        console.log('finalurl',final_url);
        return this.http.get(final_url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working
                // either remove it or add the line below (return ...)
                console.log(' I CAN SEE DATA HERE: ', data.json());
                return data.json();
            }).catch(error => throwError(error.json()));

      /* return this.http.get('https://therightdoctors.com/api/beta/article/' + slug + '?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4');*/
        /*return this.http.get('https://therightdoctors.com/api/beta/article?event=' + event + '&slug=' + slug + '&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4',this.jwt()).map((response: Response) => response.json());*!/*/
    }

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return throwError(errMsg);
  }

  getlastwordbyslug(slug: number) {
    return this.http.get('https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    console.log('in jwt function');
    // create authorization header with jwt token
    /*let currentUser = JSON.parse(localStorage.getItem('currentUser'));*/
    let currentUser = null;
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }

  getDownload(targetUrl){
    this.http.get(targetUrl,{responseType:ResponseContentType.Blob})
    .catch((err)=>{return err})
    .subscribe((res:Response)=>{
      var a = document.createElement("a");
      a.href = URL.createObjectURL(res.blob());
      a.download = "img.jpg";
      // start download
      a.click();
    })
  }
}
