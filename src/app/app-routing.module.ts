import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'about',loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule)},
  {path:'blog',loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(c=>c.ShopModule)},
  {path:'contact',loadChildren:()=>import("./contact/contact.module").then(d=>d.ContactModule)},
  {path:'SignUp',loadChildren:()=>import('./sign-up/sign-up.module').then(n=>n.SignUpModule)},
  {path:'achat',loadChildren:()=>import('./achat/achat.module').then(m=>m.AchatModule)},
  {path:'**',component:HomeComponent,pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
