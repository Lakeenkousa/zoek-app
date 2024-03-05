import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'Homepage',
        children: [
          {
            path:'',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'Zoek',
        children:[
          {
            path:'',
            loadChildren:() => import('../zoek/zoek.module').then( m => m.ZoekPageModule),
          }
        ]
      },
      {
        path: 'About-us',
        children:[
          {
            path:'',
            loadChildren: () => import('../about-us/about-us.module').then( m => m.AboutUsPageModule),
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
