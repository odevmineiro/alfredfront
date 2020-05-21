import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private push: Push) {}

  ngOnInit() {
    this.initializeFirebase();
  }

  goDash(): void {
    this.router.navigateByUrl('/dashboard');
  }

  private initializeFirebase() {
    const options: PushOptions = {
      android: {
        senderID: '485275850107'
      }
    }
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('registration').subscribe(res => console.log(` ${res.registrationId}`));
    pushObject.on('notification').subscribe(res => console.log(`Já chegou o disco voador: ${res.message}`))

  }

}
