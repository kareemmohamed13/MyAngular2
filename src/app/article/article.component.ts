import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  implements OnInit{

constructor( private servive :MyServiceService){

}
  
ngOnInit(){

  this.servive.sayHello("Article")

}



}
