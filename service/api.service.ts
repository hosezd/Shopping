
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productList = [
          
    {image:'https://clipground.com/images/minivan-clipart-16.jpg',Id:23,title:'Minivan',price: '2000',fav:false},
    {image:'https://assets.wallpapersin4k.org/uploads/2017/04/Bmw-Car-HD-Wallpaper-Free-Download-10.jpg',Id:24,title:'Coupe',price: '4000',fav:false},
    {image:'https://www.autotrader.com/wp-content/uploads/2020/02/216497.jpg',Id:25,title:'Hatchback',price: '6000',fav:false},
    {image:'http://cliparts.co/cliparts/8iA/Enj/8iAEnjzyT.png',Id:26,title:'Van',price: '8000',fav:true}]

  
  getProduct(){
    return this.productList;
  }
  filter(title:any){
    return this.productList.filter(api=>api.title === title)
}
updateFav(Id:any){
  this.productList.forEach(item => {
      if(item.Id === Id) {
          item.fav = !item.fav
      }
  })
}

}
