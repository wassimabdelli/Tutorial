import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email : string = '';
password : string = '';
name : string = '';
LastName : string = '';
DateBrit! : Date ;
  constructor( private auth : AuthService ) { }

  ngOnInit(): void {
  }

  login()
  {
    if ( this.email =='' )
    {
      alert('Please enter your email');
      return;
    }else if ( this.password =='' )
    {
      alert('Please enter your password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }
  
  register()
  {
    if ( this.email =='' )
    {
      alert('Please enter your email');
      return;
    }else if ( this.password =='' )
    {
      alert('Please enter your password');
      return;
    }
    this.auth.register(this.email,this.password,this.DateBrit,this.name,this.LastName);
    this.email = '';
    this.password = '';
  }


}
