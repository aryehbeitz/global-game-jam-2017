import { Directive, Input } from '@angular/core'; 
import { ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
	selector: '[scroll-to-end]'
})
export default class ScrollToEndDirective {
    private scrollToEndSubs:Subscription;
    @Input() scrollTrigger:Observable<boolean>;
    @Input() scrollElement:string;
    
	constructor(
        private _elementRef:ElementRef
    ) {}

	ngOnInit() {
        let elm:Element = document.querySelector(this.scrollElement);
               
        elm = elm || this._elementRef.nativeElement;
        
		this.scrollToEndSubs = this.scrollTrigger.subscribe(()=> {
            elm.scrollTop = elm.scrollHeight;
        });
	}
    
    ngOnDestroy() {
        this.scrollToEndSubs.unsubscribe();
    }
}