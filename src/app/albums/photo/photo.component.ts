import { Component, Input } from '@angular/core';
import { Photos } from 'src/app/model/photos';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input()
    photos!: Photos[]
}
