import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { NguoiDung, dangNhap } from '../models/nguoidung';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }
  layDanhSachNguoiDung():Observable<any>{
    let url="http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05";
    let observ= this._http.get(url);
    return observ;
  }
  dangKyNguoiDung(nguoiDung:NguoiDung):Observable<any>{
    let url="http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    let header=new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observ=this._http.post(url,nguoiDung);
    return observ;
  }
  dangNhap(dangnhap:dangNhap){
    let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;
    let header=new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observ=this._http.post(url,dangnhap);
    return observ;
  }
}
