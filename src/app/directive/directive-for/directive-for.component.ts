import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.scss']
})
export class DirectiveForComponent implements OnInit {
  danhSachSinhVien:Array<any>=[
    {MSSV:"212",hoTen:"Nguyễn Thành Tín",tuoi:14},
    {MSSV:"223",hoTen:"Nguyễn Văn B",tuoi:20},
    {MSSV:"123",hoTen:"Nguyễn Văn K",tuoi:23}
  ]
  constructor() { }

  ngOnInit() {
  }
  btnThemSinhVien(mssv,hoTen,old){
    this.danhSachSinhVien.push(
      {MSSV:mssv,hoTen:hoTen,tuoi:old}
    )
  }
}
