import { Component } from '@angular/core';
import {Form, NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formData: any = {}
  submitted!: boolean

  showData = (user: {name: string, age: number, email: string, password: string}) => {
    this.formData = user;
    this.submitted = true
  }
}
