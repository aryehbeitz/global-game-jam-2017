import {Directive, Renderer} from '@angular/core'; 
import {ElementRef} from '@angular/core';

@Directive({
	selector: '[active-focus]'
})
export default class ActiveFocusDirective {
    private focusListener:Function;
    private blurListener:Function;
    
	constructor(private _elementRef: ElementRef,private  _renderer: Renderer) { }

	ngOnInit() {
		this.focusListener = this._renderer.listen(this._elementRef.nativeElement, 'focus', ()=> {
            this._renderer.setElementClass(this._elementRef.nativeElement, 'active', true);
        });
        
        this.blurListener = this._renderer.listen(this._elementRef.nativeElement, 'blur', ()=> {
            this._renderer.setElementClass(this._elementRef.nativeElement, 'active', false);
        });
	}
    
    ngOnDestroy() {
        this.focusListener && this.focusListener();
        this.blurListener && this.blurListener();
    }
}