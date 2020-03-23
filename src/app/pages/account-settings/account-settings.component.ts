import { SettingsService } from './../../services/settings.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject( DOCUMENT ) private document,
    public settingService: SettingsService
    ) { }

  ngOnInit() {
  }

  changetheme( color: string, link: any ) {
    // console.log( color );
    this.applyCheck( link );
    this.settingService.applyTheme( color );
  }

  applyCheck(link: any) {
    // console.log( link );
    const selectors: any = document.getElementsByClassName('selector');

    // tslint:disable-next-line: prefer-const
    for ( let ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
