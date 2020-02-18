import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-switch',
  templateUrl: './directive-switch.component.html',
  styleUrls: ['./directive-switch.component.scss']
})
export class DirectiveSwitchComponent implements OnInit {
  color:string="red"
  constructor() { }

  ngOnInit() {
  }
  change(color:string){
    this.color=color;
  }
}
