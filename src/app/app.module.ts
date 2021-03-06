import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

// Modules
import { PagesModule } from './pages/pages.module';

// Temporal
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IncrementorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
