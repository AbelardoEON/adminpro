import { Injectable, Inject } from '@angular/core';
import { Settings } from '../../interfaces/settings.interface';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: './assets/css/colors/default.css',
    theme: 'default'
  };

  constructor( @Inject( DOCUMENT ) private document ) { }

  saveSettings() {
    localStorage.setItem( 'Settings', JSON.stringify( this.settings ) );
  }

  getSettings() {
    if ( localStorage.getItem( 'Settings' ) ) {
      this.settings = JSON.parse( localStorage.getItem('Settings') );
      this.applyTheme( this.settings.theme );
    } else {
      console.log('usando por defecto');
    }
  }

  applyTheme( theme: string) {

    const url = `./assets/css/colors/${ theme }.css`;
    this.document.getElementById('themeApp').setAttribute('href', url);

    this.settings.themeUrl = url;
    this.settings.theme = theme;

    this.saveSettings();
  }
}


