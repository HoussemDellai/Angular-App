import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.css']
})
export class AddtolistComponent implements OnInit {

  fullnames : string[] = ["Mohamed", "Ahmed", "Ali", "Omar"];

  constructor() { }

  ngOnInit() {
  }

  addName(name: string) : void {
    var length = this.fullnames.push(name);
    console.log("this.fullnames.push(name) = " + length);
  }

}
