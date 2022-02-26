import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layout } from 'src/app/layout/layout.service';
import { TasksComponent } from './tasks/tasks.component';
const routes: Routes = [
   layout.loadChildern([
      {
        path:"",
        component:TasksComponent
      }
   ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
