import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { FormsModule } from '@angular/forms';
import { AchatComponent } from './achat/achat.component';
import { AchatModule } from './achat/achat.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BlogModule,
    ContactModule,
    HomeModule,
    ShopModule,
    SignUpModule,
    FormsModule,
    AchatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
