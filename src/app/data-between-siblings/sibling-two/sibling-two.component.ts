import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/services/sibling.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.scss']
})
export class SiblingTwoComponent implements OnInit {

  dataFromSibling!: string

  constructor(private service: SiblingService) { }

  ngOnInit(): void {
    this.service.dataEmitter.subscribe(res => {
      this.dataFromSibling = res
      console.log(res)
    })
  }

}
