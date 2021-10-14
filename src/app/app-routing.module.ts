import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { HaircareComponent } from './haircare/haircare.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { ConcealerComponent } from './makeup/concealer/concealer.component';
import { LipstickComponent } from './makeup/lipstick/lipstick.component';
import { MakeupComponent } from './makeup/makeup.component';
import { PrimerComponent } from './makeup/primer/primer.component';
import { MoreComponent } from './more/more.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SkincareComponent } from './skincare/skincare.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Women',component:WomenComponent},
  {path:'Kids',component:KidsComponent},
 {path:'Fragrance',component:FragranceComponent},
  {path:'skincare',component:SkincareComponent},
  {path:'haircare',component:HaircareComponent},
  {path:'bag',component:BagComponent},
  {path:'signup',component:SignupComponent},
  {path:'makeup',component:MakeupComponent,
  children:[{path:'primer',component:PrimerComponent},
 {path:'concealer',component:ConcealerComponent},
 {path:'lipstick',component:LipstickComponent}
 ]},

 {path:'signin',component:SigninComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'**',component:PathnotfoundComponent},
 {path:'more',component:MoreComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
