import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ServiceService } from "src/app/services/service.service";
import { NguoiDung } from 'src/app/models/nguoidung';

@Component({
  selector: "app-trang-dang-ky",
  templateUrl: "./trang-dang-ky.component.html",
  styleUrls: ["./trang-dang-ky.component.scss"]
})
export class TrangDangKyComponent implements OnInit {
  @ViewChild("FormDangKy", { static: true }) formDK: NgForm;
  date = new Date();
  mangNhom:string[]=['GP01','GP02','GP03','GP04','GP05','GP06','GP07','GP08','GP09','GP10']
  mangDanhSachNguoiDung: NguoiDung[] = [];
  constructor(private nguoiDungSV: ServiceService) {}

  ngOnInit() {
    this.nguoiDungSV.layDanhSachNguoiDung().subscribe((ketQua) => {
      console.log(ketQua);
      this.mangDanhSachNguoiDung=ketQua;
    });
  }
  DangKy(value:NguoiDung) {
    //this.mangDanhSachNguoiDung.push(value);
    this.formDK.reset();
    this.nguoiDungSV.dangKyNguoiDung(value).subscribe((ketQua:any)=>{
      console.log(ketQua);
      alert("Đăng ký thành công")
    },(err:any)=>{
      console.log(err);
    })
    console.log(this.mangDanhSachNguoiDung);
  }
  ChinhSua(chinhSua) {
    let taiKhoan = chinhSua.getAttribute("data-taiKhoan");
    let matKhau = chinhSua.getAttribute("data-matKhau");
    let email = chinhSua.getAttribute("data-email");
    let hoTen = chinhSua.getAttribute("data-hoTen");
    let soDT = chinhSua.getAttribute("data-soDT");
    let maLoaiNguoiDung = chinhSua.getAttribute("data-maLoaiNguoiDung");
    this.formDK.setValue({
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      email: email,
      hoTen: hoTen,
      soDT: soDT,
      loaiNguoiDung: maLoaiNguoiDung
    });
  }
}
