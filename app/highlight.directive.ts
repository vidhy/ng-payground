import {Directive, Input, ElementRef, HostListener, Renderer2, SecurityContext} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    @Input() highlight;

    defaultColor:string = '#D3D3D3';

    _el: HTMLElement;

    constructor(
        el: ElementRef,
        private renderer: Renderer2,
        private sanitizer: DomSanitizer

    ) {
        this._el = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlightElement(this.highlight || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlightElement(null);
    }


    private highlightElement(color: string) {
        // Not secure :(
        //this._el.style.backgroundColor = color;


        //  Much better :)
        color = this.sanitizer.sanitize(SecurityContext.HTML, color);
        this.renderer.setProperty( this._el.style, 'backgroundColor', color);


        // XSS security issue example
        // let val = "<script>console.log('XSS injection')</script>"
        // val = this.sanitizer.sanitize(SecurityContext.HTML, val)
        // this.renderer.setProperty( this._el, 'innerHTML', val)
        // this._el.innerHTML = val
    }



}