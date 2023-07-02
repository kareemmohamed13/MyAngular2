import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  sayHello(componentname:string){

console.log("this is the componment "+componentname )
  }
}
