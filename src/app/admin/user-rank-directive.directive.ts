import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appUserRankDirective]'
})
export class UserRankDirectiveDirective implements AfterViewInit {
  @Input() nick:string;
  @Input() color:string;
  @Input() font:string;
  @Input() czyUstawic:boolean;
  oldColor='';
  oldFont='';
  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    console.log("wchodze",this.czyUstawic)
    if (this.czyUstawic) {
      this.changeLook(false);
    }
  }

  changeLook(old: boolean):void{
    if(!old){
      this.oldColor = this.element.nativeElement.style.color;
      this.oldFont = this.element.nativeElement.style.fontFamily;
      this.element.nativeElement.style.color = this.color;
      this.element.nativeElement.style.fontFamily = this.font;
      if(this.nick ==='admin'){
        this.element.nativeElement.innerText = 'Jest to Administrator serwera o nicku: ' + this.nick;
      }
      else{
        this.element.nativeElement.innerText = 'Jest to użytkownik serwera o nicku: ' + this.nick;
      }
    } else {
      this.element.nativeElement.style.color = this.oldColor;
      this.element.nativeElement.style.fontFamily = this.oldFont;
      this.element.nativeElement.innerText = this.nick;
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeLook(false);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.changeLook(true);
  }

}
