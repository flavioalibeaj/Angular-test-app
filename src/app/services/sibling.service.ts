import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  dataEmitter = new EventEmitter<string>()

  constructor() { }

  eventKalimiTeDhenash(data: string) {
    this.dataEmitter.emit(data)
  }
}
