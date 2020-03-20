import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent implements OnInit {
  @ViewChild('txtProgress', {static: false}) txtProgres: ElementRef;
  @Input() progress: number = 50;
  @Input() titleCounter: string = 'leyenda';
  @Output() changeValue: EventEmitter<number>;

  constructor() {
    this.changeValue = new EventEmitter();
  }

  ngOnInit() {
  }

  onChanges( newValue: number ) {

    if ( newValue <= 0 ) {
      this.progress = 0;
    } else if ( newValue >= 100 ) {
      this.progress = 100
    } else {
      this.progress = newValue
    } 
    this.txtProgres.nativeElement.value = Number( this.progress );
    this.changeValue.emit( this.progress );
  }

  changeProgress( value: number  ) {
    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }
    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }
    this.progress += value;

    this.changeValue.emit( this.progress );
    this.txtProgres.nativeElement.focus();
  }

}
