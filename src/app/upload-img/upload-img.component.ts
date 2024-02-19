import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
   file! : File

   selectedFile!: string;
  constructor(private storage: AngularFireStorage) {}
  ngOnInit(): void {

  }

  upload(event: any) {
    this.file = event.target.files[0];
    //this.uploadFile(file);
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedFile = reader.result as string;
      };
    }
  }
  

  uploadFile() {
    const storageRef = this.storage.ref('images/' + this.file.name);
    storageRef.put(this.file).then((snapshot) => {
      console.log('Image uploaded successfully!');
      // le code qui donne la path de l'image dans storage
      snapshot.ref.getDownloadURL()
      .then((downloadURL) => {
        console.log('Image URL:', downloadURL);  // Log the URL to the console
      })
     ////////////////////////////////////
    }).catch((error) => {
      console.log('Error uploading image:', error);
    });
  }
}

