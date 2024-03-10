import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

import { TodolistComponent } from './todolist/todolist.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { GestionfilesComponent } from './gestionfiles/gestionfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateTaskComponent,

     TodolistComponent,
     UpdateTaskComponent,
     UploadImgComponent,
     GestionfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'MyBlog'),
    FormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
