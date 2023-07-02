import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { catagory } from '../category';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent  implements OnInit{

  cat:catagory=new catagory("unknown",0)
  constructor(private service:MyServiceService ){

  }

  ngOnInit() {
    this.service.sayHello("categoooooory")
  }

  onsubmet(){
    console.log(this.cat)
  }
}
