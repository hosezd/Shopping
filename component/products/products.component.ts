import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any= []
  constructor(private api :ApiService,private cart:CartService){}
  

  ngOnInit() {
   this.productList= this.api.getProduct()
  }
  filterItems(e:any){
    this.productList = this.api.filter(e.target.value)
 }
  
  setFavorite(item:any){
    this.api.updateFav(item.Id)
}
addtocart(item: any){
  this.cart.addtoCart(item);
}

  

      



}
