import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IPhoneRepairComponent } from './pages/i-phone-repair/i-phone-repair.component';
import { IPadRepairComponent } from './pages/i-pad-repair/i-pad-repair.component';
import { MacbookRepairComponent } from './pages/macbook-repair/macbook-repair.component';
import { AppleWatchRepairComponent } from './pages/apple-watch-repair/apple-watch-repair.component';
import { PickupComponent } from './pages/pickup/pickup.component';
import { OnsiteRepairComponent } from './pages/onsite-repair/onsite-repair.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutIServiceComponent } from './pages/about-i-service/about-i-service.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { ImacComponent } from './pages/imac/imac.component';
import { IPodRepairComponent } from './pages/i-pod-repair/i-pod-repair.component';

const routes: Routes = [
  {path:'iPhone-repair',component:IPhoneRepairComponent},
  {path:'iPad-repair',component:IPadRepairComponent},
  {path:'macbook',component:MacbookRepairComponent},
  {path:'apple-watch',component:AppleWatchRepairComponent},
  {path:'pickup',component:PickupComponent},
  {path:'onsite',component:OnsiteRepairComponent},
  {path:'pricing',component:PricingComponent},
  {path:'about',component:AboutIServiceComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'',component:MainComponent},
  {path:'imac',component:ImacComponent},
  {path:'iPod',component:IPodRepairComponent}

  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled',
  }),
],
  exports: [RouterModule],
})
export class AppRoutingModule { }
