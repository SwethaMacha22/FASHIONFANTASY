import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { SkincareComponent } from './skincare/skincare.component';
import { HaircareComponent } from './haircare/haircare.component';
import { MakeupComponent } from './makeup/makeup.component';
import { PrimerComponent } from './makeup/primer/primer.component';
import { ConcealerComponent } from './makeup/concealer/concealer.component';
import { LipstickComponent } from './makeup/lipstick/lipstick.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { HomeComponent } from './home/home.component';
import { BagComponent } from './bag/bag.component';
import { MoreComponent } from './more/more.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    WomenComponent,
    KidsComponent,
    FragranceComponent,
    SkincareComponent,
    HaircareComponent,
    MakeupComponent,
    PrimerComponent,
    ConcealerComponent,
    LipstickComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    PathnotfoundComponent,
    HomeComponent,
    BagComponent,
    MoreComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
