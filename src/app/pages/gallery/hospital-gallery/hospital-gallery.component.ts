import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverComponent } from "../../../components/shared/cover/cover.component";

@Component({
    selector: 'app-hospital-gallery',
    standalone: true,
    templateUrl: './hospital-gallery.component.html',
    imports: [CommonModule, CoverComponent]
})
export class HospitalGalleryComponent {
  hospitalImages: any[] = [
    '../../../assets/images/others/1.jpg',
    '../../../assets/images/others/5.jpg',
    '../../../assets/images/others/6.jpg',
    '../../../assets/images/others/9.jpg',
    '../../../assets/images/others/16.jpg',
    '../../../assets/images/others/17.jpg'
  ];

  hospitalNames: any[] = [
    'Recovery Room: News beyond the pandemic',
    'What is the impact of eating too much sugar?',
    'What is the impact of eating too much sugar?',
    'List of Countries without Coronavirus case',
    'What is the impact of eating too much sugar?',
    'What is the impact of eating too much sugar?'
  ];

}
