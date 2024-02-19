import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { GestionfilesComponent } from './gestionfiles/gestionfiles.component';

const routes: Routes = [
  { path:'',redirectTo:'login' , pathMatch:'full' },
  { path:'uploadImg' , component: UploadImgComponent } ,
  { path: 'login', component: LoginComponent },
  { path:'todolist' , component: TodolistComponent },
  { path:'file' , component: GestionfilesComponent },
  { path:'updateTask/:param1/:param2/:param3', component : UpdateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
