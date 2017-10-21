import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProdutosPage } from './produtos';

@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProdutosPage
  ]
})
export class ProdutosPageModule { }
