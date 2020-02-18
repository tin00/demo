import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightDirective]'
})
export class HightDirectiveDirective implements OnInit {
//contructer sẽ chạy trước OnInit()
  constructor(private El:ElementRef) {
   }
   ngOnInit(){
     this.El.nativeElement.style.backgroundColor="black"
   }
}
