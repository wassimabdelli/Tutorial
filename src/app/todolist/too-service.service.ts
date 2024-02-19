import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TooServiceService {

  constructor( private fireauth : AngularFireAuth , private firestore : AngularFirestore , private router : Router ) { }
  addTAsk ( task : string , date : Date  ) 
  {
   //const formattedDate = date.toLocaleDateString('en-GB');
    
    this.firestore.collection('Task').doc().set({
      nom: task,
      date: date,
    
    })
    .then(() => {
      alert('Add task Successful');
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  getTasks() {

    
    return this.firestore.collection('Task',ref => ref.orderBy('date','desc')).snapshotChanges();


  }


  deleteT(id : string){

  
   return this.firestore.collection('Task').doc(id).delete();
    
  }

}
