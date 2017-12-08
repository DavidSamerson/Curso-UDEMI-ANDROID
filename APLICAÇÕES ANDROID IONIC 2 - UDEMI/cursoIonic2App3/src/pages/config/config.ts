import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Config page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class Config {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Config');
  }

}
