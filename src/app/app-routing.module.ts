import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PrivacyPolicyComponent } from './includes/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
