import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContatoPage } from './contato';

@NgModule({
  declarations: [
    ContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContatoPage
  ]
})
export class ContatoPageModule { }
