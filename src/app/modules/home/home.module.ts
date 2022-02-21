import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ShardModule } from 'src/app/shard/shard.module';

@NgModule({
  declarations: [
    HomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShardModule
  ]
})
export class HomeModule { }
