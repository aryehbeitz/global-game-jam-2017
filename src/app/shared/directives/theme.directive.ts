import {Directive, Renderer} from '@angular/core'; 
import {ElementRef} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive({
	selector: '[theme]'
})
export default class ThemeDirective {
    private themeSubs: Subscription;
    
	constructor(private _elementRef: ElementRef, private  _renderer: Renderer) { }

	ngOnInit() {
		// const element = this._elementRef.nativeElement;
        // let styleTag = element.getElementsByClassName('theme')[0];
        
        // if(!styleTag) {
        //     styleTag = this._renderer.createElement(element, 'style');
        //     this._renderer.setElementClass(styleTag, 'theme', true);
        // }
        
        // this.themeSubs = this._settingsModel.themeContent
        //             .distinctUntilChanged()
        //             .subscribe(function(themeContent:string) {
        //                 while(styleTag.sheet.rules.length) {
        //                     styleTag.sheet.removeRule(0);
        //                 }
        //                 themeContent
        //                     .split('}')
        //                     .filter((rule:string)=> !!rule.trim())
        //                     .map((rule:string)=> rule + '}')
        //                     .forEach(function(rule:string, i:number) {
        //                         styleTag.sheet.insertRule(rule, i);
        //                     }.bind(this));
        //             }.bind(this));
	}
    
    ngOnDestroy() {
        this.themeSubs.unsubscribe();
    }
}