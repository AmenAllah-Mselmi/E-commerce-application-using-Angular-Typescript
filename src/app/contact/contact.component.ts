import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Typed from 'typed.js';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngOnInit(){
    const options = {
      strings: ["#let's_talk","#let's_talk","#let's_talk"],
      typeSpeed: 60,
      backSpeed: 60,
      loop:true,
      cursorChar: '|',
    };
  const typed = new Typed('#h1', options);
}
print(f:NgForm){
console.log(f);
}
}
