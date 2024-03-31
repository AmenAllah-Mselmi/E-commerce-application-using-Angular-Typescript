import { Component,  inject } from '@angular/core';
import { S1Service } from './Services/s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-COMMERCE';
nb=0
nb1=0
constructor(private s1:S1Service){

}
ngOnInit(){
  setInterval(()=>{
this.nb=this.s1.nb;
  },0)
  setInterval(()=>this.nb1++,1000)
}
}
