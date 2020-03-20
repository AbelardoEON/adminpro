import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { IncrementorComponent } from '../incrementor/incrementor.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    IncrementorComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ]
})

export class PagesModule{}
