import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product : {name:string , price : number } = {
    name : "Macbook M1",
    price : 8500
  }
}
