import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //ionic carrega e chama isso automaticamente.
  ionViewDidLoad() {
    console.log(this.navParams);
    console.log(this.navParams.get('type'));
    this.navParams.data.type;
    this.navParams.data['message'](); 
  }

  pushPage(): void {
    this.navCtrl.push(Contact);
  }

  popPage(): void {
    this.navCtrl.pop();
  }

}
