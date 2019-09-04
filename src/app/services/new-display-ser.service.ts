import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewDisplaySerService {
  constructor() {}
  //creating a funcion which will be called at various components

  display() {
    return 'calling display service from the different laptop';
  }
}
