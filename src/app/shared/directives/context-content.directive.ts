import {Directive, Renderer, Input} from '@angular/core'; 
import {ElementRef, ViewContainerRef} from '@angular/core';
// import {BrowserDomAdapter} from '@angular/platform-browser-dynamic';

@Directive({
	selector: '[context-menu]'
})
export default class ContextMenuDirective {
    // @Input() menu:Type<any>;
    // @Input() menuPayload:Type;
    @Input() menuEnabled:boolean = true;
    private body:Element;
    private componentElement:Element;
    private menuComponent:IMenu;
    
    private elmContentMenuListener:Function;
    private elmClickListener:Function;
    private clickListener:Function;
    private contentMenuListener:Function;
    
	constructor(
        private _elementRef: ElementRef,
        private  _renderer: Renderer,
        private _viewContainerRef: ViewContainerRef
    ) {}

	ngAfterViewInit() {
        // this.body = this._adapter.query('body');
        this.body = document.querySelector('body');
		this.elmContentMenuListener = this._renderer.listen(this._elementRef.nativeElement, 'contextmenu', (e:MouseEvent)=> {
            e.preventDefault();
            if(this.menuEnabled) {
                this.destroyMenu();
                this.createMenu(e);
            }
        });
        this.elmClickListener = this._renderer.listen(this._elementRef.nativeElement, 'click', ()=> {
            this.destroyMenu();
        });
        this.clickListener = this._renderer.listenGlobal('document', 'click', ()=> {
            this.destroyMenu();
        });
        this.contentMenuListener = this._renderer.listenGlobal('document', 'contextmenu', (e:MouseEvent)=> {
            if(e.target !== this._elementRef.nativeElement) {
                this.destroyMenu();
            }
        });
	}
    
    createMenu(e:MouseEvent) {
        // this._dcl.loadNextToLocation(this.menu, this._viewContainerRef)
        //     .then(function(component:ComponentRef) {
        //         this.menuComponent = component.instance;
        //         this.componentElement = component.location.nativeElement;
        //         this.menuComponent.payload = this.menuPayload;
        //         this.body.appendChild(this.componentElement);
        //         const position = this.getPosition(e);
        //         this.setExactPosition(position.x, position.y);
        //     }.bind(this));
    }
    
    setExactPosition(x:number, y:number) {
        const screenRect = this.body.getBoundingClientRect(),
              menuRect = this.componentElement.getBoundingClientRect();
        let tooltipTop = y,
            tooltipLeft = x;
            
        if(tooltipLeft + menuRect.width > screenRect.width) {
            tooltipLeft = screenRect.width - menuRect.width;
        }
        
        if(tooltipTop + menuRect.height > screenRect.height) {
            tooltipTop = screenRect.height - menuRect.height;
        }
            
        this._renderer.setElementStyle(this.componentElement, 'position', 'fixed');
        this._renderer.setElementStyle(this.componentElement, 'top', tooltipTop + 'px');
        this._renderer.setElementStyle(this.componentElement, 'left', tooltipLeft + 'px');
    }
    
    getPosition(e:MouseEvent) {
        let posx = 0,
            posy = 0;

        if (e.pageX || e.pageY) {
            posx = e.pageX + 15;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + this.body.scrollLeft;
            posy = e.clientY + this.body.scrollTop;
        }

        return {
            x: posx,
            y: posy
        };
    }
    
    destroyMenu() {
        if(this.menuComponent) {
            this.menuComponent.ngOnDestroy();
            this.menuComponent = null;
        }
        if(this.componentElement) {
            this.body.removeChild(this.componentElement);
            this.componentElement = null;
        }
    }
    
    ngOnDestroy() {
        this.elmContentMenuListener && this.elmContentMenuListener();
        this.contentMenuListener && this.contentMenuListener();
        this.elmClickListener && this.elmClickListener();
        this.clickListener && this.clickListener();
        
        this.destroyMenu && this.destroyMenu();
        this.body = null;  
    }
}

export interface IMenu {
    payload:any;
    ngOnDestroy:Function;
}