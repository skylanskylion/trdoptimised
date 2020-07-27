import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

    email: any;
    verified: boolean = false;
    message: any;

    constructor(private route: ActivatedRoute, private users: UserServiceService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.email = params['email'];
        });
        this.verify(this.email);
    }

    verify(email) {
        this.users.check_mail(email).subscribe(
            data => {
                console.log(data);
                if (data['success'] == true) {
                    this.verified = true;
                    this.message = '';
                    setTimeout(window.location.href = 'https://therightdoctors.com/synapse/the-last-word', 10000);
                } else if (data['success'] == 'notfound') {
                    this.message = 'Mail Not Found';
                    this.verified = false;
                    setTimeout(window.location.href = 'https://therightdoctors.com/synapse/the-last-word', 10000);
                } else {
                    this.message = 'Already Verified';
                    this.verified = false;
                    setTimeout(window.location.href = 'https://therightdoctors.com/synapse/the-last-word', 10000);
                }
            }
        )
    }
}



