import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formData: any = {}
  visibleData: boolean = false

  showData = (userForm: NgForm) => {
    this.formData = userForm.value;
    console.log(this.formData)
    this.visibleData = !this.visibleData
  }
}