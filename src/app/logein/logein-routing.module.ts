import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogeinPage } from './logein.page';

const routes: Routes = [
  {
    path: '',
    component: LogeinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogeinPageRoutingModule {}
