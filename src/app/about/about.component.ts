import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  ngOnInit(){
    const options = {
      strings: ['#KnowUs'],
      typeSpeed: 100,
      backSpeed: 100,
      loop:true,
      cursorChar: '|',
    };
  const typed = new Typed('#h1', options);
}
}
