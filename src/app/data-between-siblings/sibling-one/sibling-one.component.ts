import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SiblingService } from 'src/app/services/sibling.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.scss']
})
export class SiblingOneComponent {

  inputtedText!: string

  constructor(private service: SiblingService) { }

  showInfoToSibling() {
    this.service.eventKalimiTeDhenash(this.inputtedText)
  }
}
