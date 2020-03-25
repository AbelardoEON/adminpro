import { SettingsService } from './../services/settings/settings.service';
import { Component, OnInit } from '@angular/core';
// calling function of a external file of javascript
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(
    public settingsService: SettingsService
  ) {
    this.settingsService.getSettings();
  }

  ngOnInit() {
    init_plugins();
  }

}
