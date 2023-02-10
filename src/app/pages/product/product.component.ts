import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    this.metodoget();
    this.postProducts();
    this.updateProducts();
    this.deleteProducts()
  }
  constructor(private http:HttpClient){}
  readonly api = 'https://api.escuelajs.co/api/v1/products'
  metodoget(){
    const api = `${this.api}`
    const response = this.http.get(api).subscribe(response=>{console.log(response)})
  }
  postProducts(){
    const data = {
      title: 'Lapto',
      price: 256,
      description:'Ropa / Joselyn Alajo',
      images:['imagen sin argumentos'],
      categoryId:600
    }
    const api = `${this.api}`
    this.http.post(this.api,data).subscribe(response=>{console.log(response)})
  }
  updateProducts(){
    const actualizar={
      title :'Panty Algodon',
      price:5,
      description:'Lenceria /Joselyn'
    }
    const api =`${this.api}`;
    this.http.put(api,actualizar).subscribe(response=>{console.log(response)})
  }
  deleteProducts(){
  const api = 'https://api.escuelajs.co/api/v1/products/216';
  this.http.delete(api).subscribe(response=>{console.log(response)})

  }
}

