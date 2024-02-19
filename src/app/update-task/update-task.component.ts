import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UpdateServiceService } from './services/update-service.service';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  param1!: string;
  param2!: string;
  param3! : any;
  date! : string
  Mydate! : Date;

  /* 
  param1 ==> name task

  param2 ==> date
  */
  constructor( private route : ActivatedRoute , private Uts : UpdateServiceService   ) { }

  ngOnInit(): void {
    this.param1 = this.route.snapshot.params['param1'];
    this.param2 = this.route.snapshot.params['param2'];
    this.param3 = this.route.snapshot.params['param3'];
    var dateParts = this.param2.split('/');
    // Réorganiser les parties de la date dans le nouveau format
     this.date = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
   
  }
  update( param3 : any , param1 : string , param2 : string )
{
  const a = new Date ( this.date );
 this.Uts.updateTask( param3 , param1 , a ); 
 alert('OK')
 
 alert ( a ) ;
}



convertirStringEnDate(dateString: string) : Date | null  {
  const dateParts = dateString.split("/");
const day = parseInt(dateParts[0], 10);
const month = parseInt(dateParts[1], 10) - 1; // Mois est 0-indexé, donc soustraire 1
const year = parseInt(dateParts[2], 10);

// Crée un objet Date
const dateObject = new Date(year, month, day);

// Affiche la date dans le format souhaité

const formattedDate = dateObject.toLocaleString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
});
return (dateObject) ;
}

}





  /*this.date = new Date(this.param2);
    console.log(this.date)*/