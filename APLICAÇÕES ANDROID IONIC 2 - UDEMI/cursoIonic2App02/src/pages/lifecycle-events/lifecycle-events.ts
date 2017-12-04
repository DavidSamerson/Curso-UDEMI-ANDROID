import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';



@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEvents {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //guarda de entrada da pagina
  ionViewCanEnter(): boolean {
    console.log('01 ionViewCanEnter Called');
    return true;
  }

  //assim que entra, tá carregando ela, não exibida
  ionViewDidLoad() {
    console.log('02 ionViewDidLoad Ccalled');
  }

  //está pra entrar, mas não entrou, não exibida
  ionViewWillEnter(){
    console.log('03 ionViewWillEnter Called');
  }

  //pagina acabou de entrar, exibida
  ionViewDidEnter(){
    console.log('04 ionViewDidEnter Called');
  }

  //guarda da pagina, verifica se pode sair da pagina
  ionViewCanLeave() : boolean{
    console.log('05 ionViewCanLeave Called');
    return true;
  }

  //Prestes a sair, mas ainda não saiu.
  ionViewWillLeave(){
    console.log('06 ionViewWillLeave Called');
  }

  //Quando já saiu completamente
  ionViewDidLeave(){
    console.log('07 ionViewDidLeave Called');
  }

  //está prestes a ser destruida.
  ionViewWillUnload(){
    console.log('08 ionViewWillUnload Called');
  }
  

 

}
