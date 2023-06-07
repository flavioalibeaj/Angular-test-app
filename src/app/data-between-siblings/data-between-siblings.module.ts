import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBetweenSiblingsRoutingModule } from './data-between-siblings-routing.module';
import { DataBetweenSiblingsComponent } from './data-between-siblings.component';
import { SiblingOneComponent } from '../data-between-siblings/sibling-one/sibling-one.component';
import { SiblingTwoComponent } from '../data-between-siblings/sibling-two/sibling-two.component';


@NgModule({
  declarations: [
    DataBetweenSiblingsComponent,
    SiblingOneComponent,
    SiblingTwoComponent
  ],
  imports: [
    CommonModule,
    DataBetweenSiblingsRoutingModule,
    FormsModule
  ]
})
export class DataBetweenSiblingsModule { }
