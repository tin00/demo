import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if-else',
  templateUrl: './directive-if-else.component.html',
  styleUrls: ['./directive-if-else.component.scss']
})
export class DirectiveIfElseComponent implements OnInit {
  status:boolean=false;
  email:string="nttin256@gmail.com";
  pass:string="8426";
  thongBao:string="";
  constructor() { }

  ngOnInit() {
  }
  dangNhap(mail:string,pas:string){
    if(this.email==mail && this.pass==pas){
      this.status=true;
      this.thongBao="Đăng nhập thành công !"
    }
    else if(this.email!=mail && this.pass!=pas){
      this.thongBao="Bạn nhập sai Email hoặc mật khẩu";
    }
  }
  dangXuat(){
    this.status=false;
    this.thongBao="";
  }
}
