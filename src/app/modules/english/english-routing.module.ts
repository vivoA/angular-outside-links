import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { EnglishComponent } from './english/english.component';
  const routes: Routes = [
    layout.loadChildern([
      {
        path:"",
        component:EnglishComponent
      }
    ])
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }
