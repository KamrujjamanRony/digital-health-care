import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CoverComponent } from '../../../shared/cover/cover.component';
import { ConfirmModalComponent } from '../../../shared/confirm-modal/confirm-modal.component';
import { CarouselService } from '../../../../features/services/carousel.service';
import { ImgbbService } from '../../../../features/services/imgbb.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-add-carousel',
  templateUrl: './add-carousel.component.html',
  standalone: true,
  imports: [CoverComponent, FormsModule, ConfirmModalComponent]
})
export class AddCarouselComponent implements OnDestroy {
  // Component properties
  yourTitle: any = 'add a carousel';
  yourSub1: any = 'Dashboard';
  yourSub2: any = 'Add Carousel';
  err: any = '';
  model: any;
  private addCarouselSubscription?: Subscription;
  confirmModal: boolean = false;

  closeModal() {
    this.confirmModal = false;
  }

  constructor(private carouselService: CarouselService, private imgbbService: ImgbbService) {
    // Initialize model properties
    this.model = {
      companyID: environment.hospitalCode,
      title: '',
      description: '',
      imageUrl: '',
    };
  }

  // Handle form submission
  onFormSubmit(): void {
    const formData = new FormData();

    formData.append('CompanyID', this.model.companyID);
    formData.append('Title', this.model.title);
    formData.append('Description', this.model.description);
    formData.append('ImageUrl', this.model.imageUrl);

    this.addCarouselSubscription = this.carouselService.addCarousel(formData)
      .subscribe({
        next: (response) => {
          // toast
          this.confirmModal = true;
        },
        error: (error) => {
          console.error('Error adding carousel:', error);
        }
      });
  }

  // Unsubscribe from the subscription to avoid memory leaks
  ngOnDestroy(): void {
    this.addCarouselSubscription?.unsubscribe();
  }

  onInput(e: Event) {
    const input = e.target as HTMLInputElement;

    // Check if 'files' is not null before accessing its first element
    if (input.files && input.files.length > 0) {
      this.imgbbService.upload(input.files[0]).subscribe(url => {
        this.model.imageUrl = url;
      });
    } else {
      console.log('No files selected.');
    }
  };
}
