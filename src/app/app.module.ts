import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { HttpClientModule } from "@angular/common/http";
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ForexComponent } from './forex/forex.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    MahasiswaComponent,
    Dashboard2Component,
    ForexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
