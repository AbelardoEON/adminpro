import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitService {

  constructor() { }

  simulation(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 5000);
      }
    );
  }
}
