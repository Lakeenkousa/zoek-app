import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogeinPageRoutingModule } from './logein-routing.module';

import { LogeinPage } from './logein.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogeinPageRoutingModule
  ],
  declarations: [LogeinPage]
})
export class LogeinPageModule {}
