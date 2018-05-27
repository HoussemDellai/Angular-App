import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  names : string[] = ["Mohamed", "Ahmed", "Ali", "Omar"];

  constructor() { }

  ngOnInit() {
  }

}
