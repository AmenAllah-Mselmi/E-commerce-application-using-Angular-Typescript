import { Component } from '@angular/core';
import { S1Service } from '../Services/s1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nb=0;
constructor(private s1:S1Service){
this.nb=s1.nb;
}
push(){
this.nb++;
this.s1.nb=this.nb;
console.log(this.nb);
}
}
