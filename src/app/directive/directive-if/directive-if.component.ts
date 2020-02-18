import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.scss']
})
export class DirectiveIfComponent implements OnInit {
  status:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  Hiden(tatus:boolean){
    this.status=tatus;
  }
}
