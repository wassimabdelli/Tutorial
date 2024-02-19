import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth : AngularFireAuth ,  private firestore: AngularFirestore , private router : Router ) { }

  //login method
  login( email : string , password : string )
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
     localStorage.setItem('token','true')   ;
     this.router.navigate(['/todolist']);
    },err => {
        alert(err.message);
        this.router.navigate(['/login']);
    });
  }
// register method
register( email : string , password : string , dateBrith : Date , name : string , LastName : string  )
{
  this.fireauth.createUserWithEmailAndPassword(email,password).then((userCredential)=> {
    const user = userCredential.user;
    const userId = user!.uid;
    this.firestore.collection('users').doc(userId).set({
      nom: name,
      prenom: LastName,
      age: dateBrith,
      id: userId,
    })
      .then(() => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      });
    alert('Registration Successful') ;
    
    this.router.navigate(['/login']);
    },err => {
        alert(err.message);
          this.router.navigate(['/regiter']);
    });
}


//sign out 
logout()
{
  this.fireauth.signOut().then(() =>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
  } )
}

}
