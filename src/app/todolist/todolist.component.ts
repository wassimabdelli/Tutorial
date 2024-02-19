// todolist.component.ts
import { Component, OnInit } from '@angular/core';
import { TooServiceService } from './too-service.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  task: string = '';
  date!: Date;
  tasksList: any[] = [];
  docId : any[] = [];
  constructor(private tServices: TooServiceService , private firestore : AngularFirestore , private router : Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  addTask() {
    if (this.task === '') {
      alert('Please add a new task');
      return;
    }
    this.date = new Date();
    //const d =  this.date.toLocaleDateString('en-GB');
    this.tServices.addTAsk(this.task, this.date);
    this.task = ''; // Clear input field
  }

  getTasks() {
    this.tServices.getTasks().subscribe(snapshots => {
      this.tasksList = snapshots.map(snapshot => snapshot.payload.doc.data());
      this.docId = snapshots.map(snapshot => snapshot.payload.doc.id);
    }); 
    
  }


  delete(id: number) {
   - this.tServices.deleteT(this.docId[id])
      .then(() => {
        console.log('Document successfully deleted!');
        // Mettez à jour votre liste de tâches ou effectuez d'autres opérations si nécessaire
      })
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
     
  }
  update( nom : string , date : Date , j : any)
  {
    const parm2 = date.toLocaleDateString('en-GB');
  
    this.router.navigate(['/updateTask',nom, parm2 , j ] ) 

}
toupload()
{
  this.router.navigate(['/uploadImg' ] ) 
}
toFileGestion()
{
  this.router.navigate(['/file' ] ) 
}
}
 //
