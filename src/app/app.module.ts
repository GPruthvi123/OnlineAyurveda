import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserDashboardComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,AuthGuard,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
