import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostsModalComponent } from './posts-modal/posts-modal.component';
import { ShardModule } from 'src/app/shard/shard.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostsModalComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ShardModule
  ]
})
export class PostsModule { }
