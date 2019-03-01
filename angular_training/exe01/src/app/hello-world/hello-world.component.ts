import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  // template:`test of template for hello component`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name:string;
  constructor() {
    this.name="gilles";
   }

  ngOnInit() {
  }

}
