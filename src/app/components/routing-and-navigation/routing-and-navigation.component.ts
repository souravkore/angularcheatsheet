import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-and-navigation',
  templateUrl: './routing-and-navigation.component.html',
  styleUrl: './routing-and-navigation.component.css'
})
export class RoutingAndNavigationComponent {
code = `
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];`;

code1 = `
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;

code2 = `
const routes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }
];`;
}
