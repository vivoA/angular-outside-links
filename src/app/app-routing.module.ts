import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:"home",
    loadChildren:()=> import('./modules/home/home.module').then(
      m=> m.HomeModule
    )
  },

  {
    path:"tasks",
    loadChildren:() => import('./modules/tasks/tasks.module').then(
      m => m.TasksModule
    )
  },

  {
    path:"english",
    loadChildren:() => import('./modules/english/english.module').then(
      m => m.EnglishModule
    )
  },

  {
    path:"posts",
    loadChildren:() => import('./modules/posts/posts.module').then(
      m => m.PostsModule
    )
  },
  

  
  {path:'',redirectTo:'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
