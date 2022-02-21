import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { HomeComponent } from './home/home.component';
layout
const routes: Routes = [
   layout.loadChildern([
     {
       path:"",
       component:HomeComponent
     }
   ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
