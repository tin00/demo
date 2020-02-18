import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { NguoiDung } from "src/app/models/nguoidung";

import { NguoidungService } from "../services/nguoidung.service";

@Component({
  selector: "app-trang-dang-ky",
  templateUrl: "./trang-dang-ky.component.html",
  styleUrls: ["./trang-dang-ky.component.scss"]
})
export class TrangDangKyComponent implements OnInit {
  @ViewChild("FormDangKy", { static: true }) formDK: NgForm;
  date = new Date();
  tiengViet:string="^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
  email:string="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$";
  phone:string="(09|03|07|08|05)+([0-9]{8})";
  mangNhom: string[] = [
    "GP01",
    "GP02",
    "GP03",
    "GP04",
    "GP05",
    "GP06",
    "GP07",
    "GP08",
    "GP09",
    "GP10"
  ];
  mangDanhSachNguoiDung: NguoiDung[] = [];
  constructor(private nguoiDungSV: NguoidungService) {}

  ngOnInit() {
    this.Get();
  }
  Get() {
    this.nguoiDungSV.layDanhSachNguoiDung().subscribe(ketQua => {
      console.log(ketQua);
      this.mangDanhSachNguoiDung = ketQua;
    });
  }
  DangKy(value: NguoiDung,invalid) {
    //this.mangDanhSachNguoiDung.push(value);
    if(!invalid){
      this.formDK.reset();
      this.nguoiDungSV.dangKyNguoiDung(value).subscribe(
        (ketQua: any) => {
          console.log(ketQua);
          this.Get()
          alert("Đăng ký thành công");
        },
        (err: any) => {
          console.log(err);
        }
      );
      console.log(this.mangDanhSachNguoiDung);
    }else{
      alert("Không hợp lệ")
    }
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
