import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graph1Component },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'promesas', component: PromisesComponent },
      { path: 'rxjs', component: RxjsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
