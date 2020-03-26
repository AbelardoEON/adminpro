import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  simulateNotification() {
    this.countoThree()
      .then(
        () => console.log('Terminó')
      )
      .catch(
        error => console.error('error en la promesa', error)
      );
  }

  countoThree(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter += 1;
        console.log( counter );
        if ( counter === 10 ) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
