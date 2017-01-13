import { element } from 'protractor';
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
    selector: '[childTemplate]' 
})
export class ChildTemplateDirective {
    ctx: any;

    constructor(
        private viewContainer: ViewContainerRef
    ) { }
    
    @Input() set childTemplate(content: {tmpl: TemplateRef<any>, ctx: any}) {
        this.ctx = content.ctx;
        this.viewContainer.createEmbeddedView(content.tmpl, this.ctx);
    }
}