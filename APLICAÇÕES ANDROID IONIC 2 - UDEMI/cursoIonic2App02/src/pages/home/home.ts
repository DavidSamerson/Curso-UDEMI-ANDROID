import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from './../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  PushPage(): void {
    this.navCtrl.push(Contact,{
      type: 'push',
      course: 'Ionic 2',
      year: 2017,
      message: () => { 
        console.log("Welcome to Ionic 2 Course!");
      }
    });
  }

  setRoot():void {
    this.navCtrl.setRoot(Contact,{
      type:'setRoot'
    });
  }

}


