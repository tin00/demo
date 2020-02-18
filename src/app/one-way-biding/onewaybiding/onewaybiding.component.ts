import { Component, OnInit, Attribute } from "@angular/core";

@Component({
  selector: "app-onewaybiding",
  templateUrl: "./onewaybiding.component.html",
  styleUrls: ["./onewaybiding.component.scss"]
})
export class OnewaybidingComponent implements OnInit {
  eMail:string='nttin256@gmail.com';
  fullName:string='Nguyễn Thành Tín'
   
  constructor() {}
  changeFullName(fName:string){
    this.fullName=fName;
  }
  ngOnInit() {}
}
