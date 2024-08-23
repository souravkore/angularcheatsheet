import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { BasicSyntaxComponent } from './components/basic-syntax/basic-syntax.component';
import { ComponentsComponent } from './components/components/components.component';
import { ServicesComponent } from './components/services/services.component';
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

const routes: Routes = [{ path: 'basic-syntax', component: BasicSyntaxComponent },
{ path: 'directives', component: DirectivesComponent },
{ path: 'components', component: ComponentsComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'routing-and-navigation', component: RoutingAndNavigationComponent },
{ path: 'pipes', component: PipesComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'lifecycle-hooks', component: LifecycleHooksComponent },
{ path: 'dependency-injection', component: DependencyInjectionComponent },
{ path: 'observables-and-rxjs', component: ObservablesAndRxjsComponent },
{ path: 'modules', component: ModulesComponent },
{ path: 'custom-directives', component: CustomDirectivesComponent },
{ path: 'lazy-loading', component: LazyLoadingComponent },
{ path: 'state-management', component: StateManagementComponent },
{ path: '', redirectTo: '/basic-syntax', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
