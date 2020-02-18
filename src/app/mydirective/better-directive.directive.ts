import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective  {

  constructor(private El:ElementRef,private renderer2:Renderer2) {
    this.renderer2.setStyle(this.El.nativeElement,"background-color","yellow");
    this.renderer2.setStyle(this.El.nativeElement,"color","white");
  }
  @HostListener('mouseenter') sukienHover(){
    this.renderer2.setStyle(this.El.nativeElement,'background-color','transparent');
    this.renderer2.setStyle(this.El.nativeElement,"color","red");
    this.renderer2.setStyle(this.El.nativeElement,'border',"solid 2px");
  }
  @HostListener('mouseleave') sukienLeave(){
    this.renderer2.setStyle(this.El.nativeElement,"background-color","red");
    this.renderer2.setStyle(this.El.nativeElement,"color","white");
  }

}
