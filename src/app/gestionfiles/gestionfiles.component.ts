import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-gestionfiles',
  templateUrl: './gestionfiles.component.html',
  styleUrls: ['./gestionfiles.component.css']
})
export class GestionfilesComponent implements OnInit {
 file! : File;
  filesArray: any[] = [];
  constructor(private storage: AngularFireStorage, private firestore : AngularFirestore   ) {}

  ngOnInit(): void {
    this.storage.ref('uploads').listAll().subscribe((result) => {
      // `result` contient la liste des fichiers stockés dans le bucket
      for (let file of result.items) {
        this.filesArray.push(file);
        console.log(file.name);
      }
    });
  }

  
  // Fonction pour uploader un fichier vers Firestore
  uploadFile(event: any) {
    const file = event.target.files[0];
    const fileName = `${file.name}`;
    const filePath = `uploads/${fileName}`;
  
    const task = this.storage.upload(filePath, file);
  
    task.then(async (snapshot) => {
      // Le fichier a été uploadé avec succès
      const url = await snapshot.ref.getDownloadURL();
      const docRef = this.firestore.collection("url").doc();
      await docRef.set({
        url,
      });
    }).catch((error) => {
      // Une erreur est survenue lors de l'upload du fichier
      console.error("Une erreur est survenue ", error);
    });
  }
  

 /* uploadFile( event : any ) {
    this.file = event.target.files[0];
    const fileType = this.file.type;
    const fileName = `${this.file.name}`;
    const filePath = `uploads/${fileName}`;

    const task = this.storage.upload( filePath , this.file );

    task.then((snapshot) => {
      // Le fichier a été uploadé avec succès
      console.log('Le fichier a été uploadé avec succès');
    }).catch((error) => {
      // Une erreur est survenue lors de l'upload du fichier
      console.error('Une erreur est survenue ');
    });
  }*/
  

}
