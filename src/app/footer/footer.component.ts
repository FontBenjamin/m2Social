import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  image:String = 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif';  

  constructor() { }

  ngOnInit() {
  }

}
