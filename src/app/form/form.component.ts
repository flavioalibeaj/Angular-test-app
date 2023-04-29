import { Component } from '@angular/core';
import {Form, NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formData: any = {}
  // formData: Form | undefined // Me jep error nqs e bej keshtu
  visibleData: boolean = false

  showData = (userForm: NgForm) => {
    this.formData = userForm.value;
    console.log(this.formData)
    this.visibleData = !this.visibleData
  }
}
