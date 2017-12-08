import { Component } from '@angular/core';
import { Config, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    public config: Config,
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Config'); 
  }

  configTest() : void {
    console.log(this.config.getModeConfig('ios'))
  }

}
