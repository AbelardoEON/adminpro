import { SettingsService } from './../services/settings.service';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// ng 2charts
import { ChartsModule } from 'ng2-charts';
import { DonutGraphComponent } from '../components/donut-graph/donut-graph.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    IncrementorComponent,
    DonutGraphComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  providers: [ SettingsService ]
})

export class PagesModule{}
