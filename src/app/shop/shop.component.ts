import { Component } from '@angular/core';
import Typed from 'typed.js';
import { S1Service } from '../Services/s1.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  ngOnInit(){
    const options = {
      strings: ['#Stayhome','#Stayhome','#Stayhome'],
      typeSpeed: 60,
      backSpeed: 60,
      loop:true,
      cursorChar: '|',
    };
  const typed = new Typed('#h1', options);
}
nb=0;
constructor(private s1:S1Service){
this.nb=s1.nb;
}
push(){
this.nb++;
this.s1.nb=this.nb;
}
}
