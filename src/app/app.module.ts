import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicSyntaxComponent } from './components/basic-syntax/basic-syntax.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ComponentsComponent } from './components/components/components.component';
import { ServicesComponent } from './components/services/services.component';
import { ChildComponent } from './components/child/child.component';
import { provideHttpClient } from '@angular/common/http';
import { RoutingAndNavigationComponent } from './components/routing-and-navigation/routing-and-navigation.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { ObservablesAndRxjsComponent } from './components/observables-and-rxjs/observables-and-rxjs.component';
import { ModulesComponent } from './components/modules/modules.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';
import { StateManagementComponent } from './components/state-management/state-management.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicSyntaxComponent,
    DirectivesComponent,
    ComponentsComponent,
    ServicesComponent,
    ChildComponent,
    RoutingAndNavigationComponent,
    PipesComponent,
    FormsComponent,
    LifecycleHooksComponent,
    DependencyInjectionComponent,
    ObservablesAndRxjsComponent,
    ModulesComponent,
    CustomDirectivesComponent,
    LazyLoadingComponent,
    StateManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
