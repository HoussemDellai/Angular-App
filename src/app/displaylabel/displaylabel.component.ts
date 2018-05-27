import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaylabel',
  templateUrl: './displaylabel.component.html',
  styleUrls: ['./displaylabel.component.css']
})
export class DisplaylabelComponent implements OnInit {

  message = 'Hello world!';

  constructor() { }

  ngOnInit() {
  }
}
