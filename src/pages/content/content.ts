import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Form } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController) { }

  openForm(item: Form) {
    this.navCtrl.push('ItemCreatePage', {
      item: item
    });
  }
  callus(tel: string) {
 
    window.location.href = 'tel:'+ tel;
    //  this.navCtrl.push('ItemCreatePage', {
  //    item: item
    
  }

}
