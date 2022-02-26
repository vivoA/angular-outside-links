import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksModalComponent } from './tasks-modal/tasks-modal.component';
import { ShardModule } from 'src/app/shard/shard.module';

@NgModule({
  declarations: [
    TasksComponent,
    TasksModalComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ShardModule
  ]
})
export class TasksModule { }
