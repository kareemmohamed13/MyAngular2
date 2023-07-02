import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "interpolation"
  colors=['white','green','red','yellow','sky']
  age=26
  source="" 
  isAuth:boolean = false 
  logstate="log in "
  currentdate=new Date()
  toggle(){
    this.isAuth=!this.isAuth
    this.logstate=this.isAuth ? "log out" : "login"
  }

  onchange (): void{
    console.log()
    
  }
}