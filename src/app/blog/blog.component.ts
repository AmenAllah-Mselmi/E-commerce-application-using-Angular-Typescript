import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  ngOnInit(){
    const options = {
      strings: ['#readmore','#readmore','#readmore','#readmore'],
      typeSpeed: 60,
      backSpeed: 60,
      loop:true,
      cursorChar: '|',
    };
  const typed = new Typed('#h1', options);
}
}
