import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage;
  dsfsd = 324;
  constructor() {
    this.storage = window.localStorage;
  }
}
