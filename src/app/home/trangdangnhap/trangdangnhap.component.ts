import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServiceService } from "src/app/services/service.service";

@Component({
  selector: "app-trangdangnhap",
  templateUrl: "./trangdangnhap.component.html",
  styleUrls: ["./trangdangnhap.component.scss"]
})
export class TrangdangnhapComponent implements OnInit {
  userKhongHopLe: any[] = ["user01", "user02"];
  constructor(private nguoiDungSV: ServiceService) {}
  formDangNhap: FormGroup;
  DangNhap() {
    // console.log(this.formDangNhap.value);
    this.nguoiDungSV.dangNhap(this.formDangNhap.value).subscribe(
      kq => {
        console.log(kq);
        if (typeof kq == "object") {
          localStorage.setItem("nguoiDungDangNhap", JSON.stringify(kq));
        }
      },
      (err: any) => {
        alert(err.error);
      }
    );
  }
  ngOnInit() {
    this.formDangNhap = new FormGroup({
      taiKhoan: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]+"),
        this.taiKhoanKhongHopLe.bind(this)
      ]),
      matKhau: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }
  taiKhoanKhongHopLe(tkvalue: FormControl) {
    for (let item of this.userKhongHopLe) {
      if (tkvalue.value === item) {
        return { "Không hợp lệ": true };
      }
      return null;
    }
  }
}
