import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoverComponent } from '../../../shared/cover/cover.component';
import { ConfirmModalComponent } from '../../../shared/confirm-modal/confirm-modal.component';
import { GalleryService } from '../../../../features/services/gallery.service';
import { ImgbbService } from '../../../../features/services/imgbb.service';

@Component({
  selector: 'app-edit-gallery',
  standalone: true,
  imports: [CoverComponent, FormsModule, ConfirmModalComponent],
  templateUrl: './edit-gallery.component.html',
  styleUrl: './edit-gallery.component.css'
})
export class EditGalleryComponent {
  yourTitle: any = 'Update Gallery information';
  yourSub1: any = 'Dashboard';
  yourSub2: any = 'Edit Gallery';
  id: any = null;
  err: any = '';
  model?: any;
  paramsSubscription?: Subscription;
  editGallerySubscription?: Subscription;
  confirmModal: boolean = false;

  closeModal() {
    this.confirmModal = false;
  }

  constructor(private route: ActivatedRoute, private galleryService: GalleryService, private imgbbService: ImgbbService) { }
  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.galleryService.getGallery(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
              }
            });
        }
      }
    });
  }

  onFormSubmit(): void {

    const formData = new FormData();

    formData.append('CompanyID', this.model.companyID);
    formData.append('GalerySerial', this.model.galerySerial);
    formData.append('GaleryName', this.model.galeryName);
    formData.append('Description', this.model.description);
    formData.append('GPicUrl', this.model.gPicUrl);

    if (this.id) {
      this.editGallerySubscription = this.galleryService.updateGallery(this.id, formData)
        .subscribe({
          next: (response) => {
            // toast
            this.confirmModal = true;
          }
        });
    }
  };

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editGallerySubscription?.unsubscribe();
  }

  onInput(e: Event) {
    const input = e.target as HTMLInputElement;

    // Check if 'files' is not null before accessing its first element
    if (input.files && input.files.length > 0) {
      this.imgbbService.upload(input.files[0]).subscribe(url => {
        this.model.gPicUrl = url;
      });
    } else {
      console.log('No files selected.');
    }
  };

}
