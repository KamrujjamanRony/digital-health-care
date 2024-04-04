import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverComponent } from "../../../components/shared/cover/cover.component";
import { InstrumentCardComponent } from "../../../components/shared/instrument-card/instrument-card.component";

@Component({
    selector: 'app-instrument-gallery',
    standalone: true,
    templateUrl: './instrument-gallery.component.html',
    imports: [CommonModule, CoverComponent, InstrumentCardComponent]
})
export class InstrumentGalleryComponent {
  productImages: any[] = [
    '../../../assets/images/products/product01.jpg',
    '../../../assets/images/products/product02.png',
    '../../../assets/images/products/product03.jpg',
    '../../../assets/images/products/product04.jpg',
    '../../../assets/images/products/product05.jpg',
    '../../../assets/images/products/product06.jpg',
    '../../../assets/images/products/product07.jpg'
  ];

  products: { name: any; origin: any }[] = [
    { name: 'roller mixer', origin: 'Switzerland' },
    { name: 'cbc machine', origin: 'Switzerland' },
    { name: 'electrolyte analyzer', origin: 'Taiwan' },
    { name: 'Biochemistry analyzer', origin: 'Taiwan' },
    { name: 'poct', origin: 'Switzerland' },
    { name: 'electronic microscope', origin: 'Taiwan' },
    { name: 'auto esr analyzer', origin: 'Switzerland' }
  ];

}
