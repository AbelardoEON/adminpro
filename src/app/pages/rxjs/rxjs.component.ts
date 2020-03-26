import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { WaitService } from '../../services/service.index';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private waitService: WaitService
  ) {
    // subcribe to observer
    // this.getObservable()
    // .pipe(
    //   // intenta de nuevo, y el numero de intentos en los parentesis
    //   retry(2)
    // )
    // .subscribe(
    //   numberObs => {
    //     console.log( 'Subs => ', numberObs );
    //   },
    //   error => {
    //     console.log( 'Error subs => ', error );
    //     this.toast.error('error en observable');
    //   },
    //   () => console.log('El observer terminó')
    // );
  }

  ngOnInit() {
  }

  getObservable(): Observable<number> {
    return new Observable(
      (observer: Subscriber<number>) => {
        let counter = 0;
        let interval = setInterval(() => {
          counter += 1;
          observer.next( counter );
          if ( counter === 10 ) {
            clearInterval();
            observer.complete();
          }
          if ( counter === 3 ) {
            clearInterval(interval);
            observer.error('Error del obs');
          }
        }, 1000);
      }
    );
  }

  observeSimulation(): Observable<string> {
    return new Observable(
      (observer: Subscriber<string>) => {
        this.waitService.simulation()
          .then(
            (resp) => {
              if ( resp === true ) {
                observer.next('Done');
                observer.complete();
              }
            }
          );
      }
    );
  }

  startServiceSimulated() {
    this.observeSimulation()
      .subscribe(
        message => this.toast.success( message )
      );
  }
}
