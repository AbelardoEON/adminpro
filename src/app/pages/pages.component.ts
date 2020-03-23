import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';

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
  }

}
