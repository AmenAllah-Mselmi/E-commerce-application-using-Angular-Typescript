import { Component, Input } from '@angular/core';
import { S1Service } from '../Services/s1.service';
@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent {
  url=''
  push1(){
this.url="../../assets/products/f1.jpg"
  }
  push2(){
    this.url="../../assets/products/f2.jpg";
  }
  push3(){
    this.url="../../assets/products/f3.jpg"
  }
  push4(){
    this.url="../../assets/products/f4.jpg";
  }
  nb=0;
constructor(private s1:S1Service){
  this.nb=s1.nb;
  this.url='../../assets/products/f1.jpg'
}
push(){
this.nb++;
this.s1.nb=this.nb;
}
}
