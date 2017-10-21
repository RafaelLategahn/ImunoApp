import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  bula(nome: string) {
    window.open('http://crm_imunocenter.lategahn.eng.br/bulas/'+nome , '_system', 'location=yes');
      // window.location.href = 'www.google.com.br'+ nome;
       //  this.navCtrl.push('ItemCreatePage', {
     //    item: item
       
     }

}
