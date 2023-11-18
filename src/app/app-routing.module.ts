import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent},
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "mahasiswa", component: MahasiswaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }