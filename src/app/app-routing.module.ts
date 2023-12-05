import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "dashboard", component: DashboardComponent, canActivate : [otentikasiGuard] },
  { path: "dashboard2", component: Dashboard2Component, canActivate : [otentikasiGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent},
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "mahasiswa", component: MahasiswaComponent, canActivate : [otentikasiGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }