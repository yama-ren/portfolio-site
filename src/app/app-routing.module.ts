import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilityComponent } from './ability/ability.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SnsComponent } from './sns/sns.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ability', component: AbilityComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sns', component: SnsComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {
      useHash: true, // 追加
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
