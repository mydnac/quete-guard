import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminGuard } from './core/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'home', component: HomeComponent,
},
{
  path: 'dashboard', component: DashboardComponent,
  canActivate: [
      AuthGuard,
  ]
},
{
  path: 'admin', component: AdminComponent,
  canActivate: [
      AdminGuard,
  ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
