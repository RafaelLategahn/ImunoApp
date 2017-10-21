import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ArtigosPage } from './artigos';

@NgModule({
  declarations: [
    ArtigosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtigosPage),
    TranslateModule.forChild()
  ],
  exports: [
    ArtigosPage
  ]
})
export class ArtigosPageModule { }
