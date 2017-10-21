import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { QuemSomosPage } from './quem-somos';

@NgModule({
  declarations: [
    QuemSomosPage,
  ],
  imports: [
    IonicPageModule.forChild(QuemSomosPage),
    TranslateModule.forChild()
  ],
  exports: [
    QuemSomosPage
  ]
})
export class QuemSomosPageModule { }
