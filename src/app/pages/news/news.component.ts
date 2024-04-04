import { Component } from '@angular/core';
import { ImgbbService } from '../../features/services/imgbb.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  imgUrl!: string;
  constructor(private readonly imgbbService: ImgbbService){}

  onInput(e: Event){
    const input = e.target as HTMLInputElement;

    // Check if 'files' is not null before accessing its first element
    if (input.files && input.files.length > 0) {
      this.imgbbService.upload(input.files[0]).subscribe(url => this.imgUrl = url);
      // console.log(this.imgUrl)
    } else {
      console.log('No files selected.');
    }
  }

  handleClick(){
    console.log(this.imgUrl)
  }
}
