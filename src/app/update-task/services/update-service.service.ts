import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor( private fireauth : AngularFireAuth , private firestore : AngularFirestore , private router : Router ) { }
  updateTask( docId : any , task : string , date : Date )
  {
    this.firestore.collection('Task').doc(docId).update({
      nom: task,
      date: date,
    })
    .then(() => {
      alert('update task Successful');
    })
    .catch((err) => {
      alert(err.message);
    });
  }
}
