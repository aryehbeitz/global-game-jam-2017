import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
    <div class="footer-container">
        <div class="rights-reserved">
            &copy;&nbsp;<div i18n>All Rights Reserved</div>
        </div>
        <div class="build-version">
            <div i18n>Build</div>: {{ buildVersion }}
        </div>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() buildVersion: string;
}
