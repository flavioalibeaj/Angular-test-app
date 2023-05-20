import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  reactiveForm!: FormGroup
  formIsSubmitted: boolean = false

  constructor() { }
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        name: new FormControl("John", [Validators.required, Validators.min(2)]),
        surname: new FormControl("", [Validators.required, Validators.min(2)]),
        email: new FormControl("johnDoe@email.com", [Validators.required, Validators.email]),
      }),
      extraInformation: new FormGroup({
        age: new FormControl(18, Validators.required),
        country: new FormControl("", Validators.required),
        password: new FormControl(null, [Validators.required, Validators.min(8)]),
        skills: new FormArray([ new FormControl(), new FormControl(), new FormControl() ])
      }),
    })
  }

  showData = () => {
    console.log(this.reactiveForm)
    this.formIsSubmitted = true
  }
}
