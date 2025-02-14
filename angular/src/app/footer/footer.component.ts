import { Component } from '@angular/core';
import { CopyrightComponent } from './copyright/copyright.component';
import { CompanyComponent } from './company/company.component';
import { RegionComponent } from './region/region.component';
import { HelpComponent } from './help/help.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CopyrightComponent, CompanyComponent, RegionComponent, HelpComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
