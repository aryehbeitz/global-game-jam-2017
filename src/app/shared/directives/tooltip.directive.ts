import {Directive, Renderer, Input} from '@angular/core'; 
import {ElementRef} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
// import {BrowserDomAdapter} from '@angular/platform-browser-dynamic';

@Directive({
	selector: '[tooltip]'
})
export default class TooltipDirective {
    @Input() tooltipText:string;
    @Input() tooltipPosition:string = 'top';
    @Input() tooltipDelay:number = 500;
    @Input() tooltipArrowSize:number = 10;
    @Input() tooltipUniqueId:boolean = true;
    @Input() tooltipEnabled:boolean = true;
    private body:Element;
    private tooltipElement:any;
    private activeSubs:Subscription;
    private active$:Subject<boolean>;
    private mouseOverListener:Function;
    private mouseOutListener:Function;
    
	constructor(
        private _elementRef: ElementRef,
        private  _renderer: Renderer
        // private _adapter: BrowserDomAdapter
    ) { 
        this.active$ = new Subject<boolean>();
        this.activeSubs = this.active$
            .delayWhen(function(shouldCreate) {
                return shouldCreate ? Observable.timer(this.tooltipDelay) : Observable.of(0);
            }.bind(this))
            .subscribe(function(shouldCreate:boolean) {
                this.tooltipElement && this._renderer.setElementStyle(this.tooltipElement, 'opacity', 1);
            }.bind(this), (err:Error)=> console.log(err));
    }

	ngAfterViewInit() {
        // this.body = this._adapter.query('body');
        this.body = document.querySelector('body');
		this.mouseOverListener = this._renderer.listen(this._elementRef.nativeElement, 'mouseover', function() {
            if(this.tooltipEnabled) {
                this.active$.next(true);
                this.createTooltip();
            }
        }.bind(this));
        
        this.mouseOutListener = this._renderer.listen(this._elementRef.nativeElement, 'mouseout', function() {
            this.destroyTooltip();
        }.bind(this));
	}
    
    createTooltip() {
        if(!this.tooltipElement) {
            // this.tooltipElement = this._adapter.createElement('div');
            this.tooltipElement = document.createElement('div');
            this.tooltipElement.innerText = this.tooltipText;
            this._renderer.setElementClass(this.tooltipElement, 'tooltip', true);
            
            if(this.tooltipUniqueId) {
                this._elementRef.nativeElement.classList.forEach(function(className:String) {
                    this._renderer.setElementClass(this.tooltipElement, className, true);
                }.bind(this));
            }
            
            this._renderer.setElementClass(this.tooltipElement, this.tooltipPosition, true);
            this._renderer.setElementStyle(this.tooltipElement, 'position', 'absolute');
            this.tooltipElement && this._renderer.setElementStyle(this.tooltipElement, 'opacity', '0');
            this.tooltipElement && this._renderer.setElementStyle(this.tooltipElement, 'white-space', 'nowrap');
            // this._adapter.appendChild(this.body, this.tooltipElement);
            document.body.appendChild(this.tooltipElement);
            this.setExactPosition(this.tooltipPosition);
        }
        
    }
    
    setExactPosition(position:string) {
        const elementRect = this._elementRef.nativeElement.getBoundingClientRect();
        let tooltipTop = elementRect.top,
            tooltipLeft = elementRect.left;
            
        switch (this.tooltipPosition) {
            case 'right':
                tooltipTop += (this._elementRef.nativeElement.clientHeight - this.tooltipElement.clientHeight) / 2;
                tooltipLeft += this._elementRef.nativeElement.clientWidth + this.tooltipArrowSize;
                break;
            case 'left':
                tooltipTop += (this._elementRef.nativeElement.clientHeight - this.tooltipElement.clientHeight) / 2;
                tooltipLeft -= this.tooltipElement.clientWidth + this.tooltipArrowSize;
                break;
            case 'bottom':
                tooltipTop += this._elementRef.nativeElement.clientHeight + this.tooltipArrowSize;
                tooltipLeft += (this._elementRef.nativeElement.clientWidth - this.tooltipElement.clientWidth) / 2;
                break;
            default:
                tooltipTop -= this.tooltipElement.clientHeight + this.tooltipArrowSize;
                tooltipLeft += (this._elementRef.nativeElement.clientWidth - this.tooltipElement.clientWidth) / 2;
                break;
        }
        
        this._renderer.setElementStyle(this.tooltipElement, 'top', tooltipTop + 'px');
        this._renderer.setElementStyle(this.tooltipElement, 'left', tooltipLeft + 'px');
    }
    
    destroyTooltip() {
        if(this.tooltipElement) {
            // this._adapter.removeChild(this.body, this.tooltipElement);
            document.body.removeChild(this.tooltipElement);
            this.tooltipElement = null;
        }
    }
    
    ngOnDestroy() {
        this.destroyTooltip();
        this.activeSubs.unsubscribe();
        this.body = null;
        
        this.mouseOverListener();
        this.mouseOverListener = null;
        this.mouseOutListener();
        this.mouseOutListener = null;
    }
}