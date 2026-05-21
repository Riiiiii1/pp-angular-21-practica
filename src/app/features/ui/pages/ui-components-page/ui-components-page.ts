import { Component } from '@angular/core';
import { FeatureChipListComponent } from './components/feature-chip-list.component';
import { GlassStatCardComponent } from './components/glass-stat-card.component';
import { GradientCtaBannerComponent } from './components/gradient-cta-banner.component';

@Component({
  selector: 'app-ui-components-page',
  imports: [FeatureChipListComponent,GlassStatCardComponent,GradientCtaBannerComponent],
  templateUrl: './ui-components-page.html',
  styles: ``,
})
export class UiComponentsPage {
   readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];
}
