import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import layout module
import { LayoutModule } from './layout/layout.module';

//fireBase
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShardModule } from './shard/shard.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ShardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA_u7z1buYgZDcVYJUcnd-Ztn8ooSezaHE",
      authDomain: "my-links-621f8.firebaseapp.com",
      projectId: "my-links-621f8",
      storageBucket: "my-links-621f8.appspot.com",
      messagingSenderId: "633880658220",
      appId: "1:633880658220:web:44118451af515d2a36ec89",
      measurementId: "G-KE66FRR8M4"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
