import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {

  user : {firstname:string , lastname: string} ={
    firstname  : "elvire",
    lastname   : "Koua"
  }

  constructor(){

  }

}
