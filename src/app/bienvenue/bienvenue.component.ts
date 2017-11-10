import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {

  image:String = 'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}
