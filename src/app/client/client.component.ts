import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  ngOnInit()  {


  }
  onsumbit(){
    console.log(this.myform.value)
  }

  myform:FormGroup =new FormGroup({
  name:new FormControl( '' ,Validators.required),
   age :new FormControl(""),
  adress :new FormControl(""),
  job :new FormControl("")

  })


}
