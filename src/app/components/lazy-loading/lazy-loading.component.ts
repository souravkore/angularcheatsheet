import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.css'
})
export class LazyLoadingComponent {
code = `
TypeScript
// Lazy-loaded module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadedComponent } from './lazy-loaded.component';

const routes: Routes = [
  { path: 'lazy', component: LazyLoadedComponent }
];

@NgModule({   

  declarations: [LazyLoadedComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedModule {}

TypeScript
// AppRoutingModule
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m   
 => m.LazyLoadedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule   
 {}`;
}
