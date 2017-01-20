import { Component, Input } from '@angular/core';

/**
 * SVG store icon. Acts on svg tag only.
 * @example Static: &lt;svg icon="icon-name"&gt;&lt;/svg&gt;
 * @example Dynamic: &lt;svg [icon]="iconName"&gt;&lt;/svg&gt;
 */
@Component({
	selector: 'svg[icon]',
	template: `<svg:use [attr.xlink:href]="iconName"></svg:use>`
})
export class SvgUseComponent {
	iconName:string;
	@Input() fallbackIcon:string;
	/**
	 * @param value Name of the id/svg-filename of the desired icon or an angular2 template expression if wrapped with parentheses
	 */
    @Input() set icon(value:string) {
		if(!value) {
			return;
		}
		this.iconName = `#${value}`;
	};
}