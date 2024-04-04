import { Component, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InstrumentCardComponent } from '../../../shared/instrument-card/instrument-card.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [RouterLink, InstrumentCardComponent],
  templateUrl: './our-products.component.html'
})
export class OurProductsComponent {
  constructor(private router: Router, private renderer: Renderer2) {}

  scrollToTop() {
    // Scroll to the top of the page
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }

}
