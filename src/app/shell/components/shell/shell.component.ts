import { Component } from '@angular/core';

@Component({
  selector: 'shell',
  template: `
    <main>
      <div class="svg-store" [inlineSVG]="'/assets/graphics.svg'"></div>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  constructor() {}

  ngOnInit() {
  }
}
