import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english/english.component';
import { EnModalComponent } from './en-modal/en-modal.component';
import { ShardModule } from 'src/app/shard/shard.module';

@NgModule({
  declarations: [
    EnglishComponent,
    EnModalComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    ShardModule
  ]
})
export class EnglishModule { }
