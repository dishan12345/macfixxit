import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IPadRepairComponent } from './pages/i-pad-repair/i-pad-repair.component';
import { IPhoneRepairComponent } from './pages/i-phone-repair/i-phone-repair.component';
import { MainComponent } from './main/main.component';
import { OnsiteRepairComponent } from './pages/onsite-repair/onsite-repair.component';
import { AppleWatchRepairComponent } from './pages/apple-watch-repair/apple-watch-repair.component';
import { MacbookRepairComponent } from './pages/macbook-repair/macbook-repair.component';
import { ImacComponent } from './pages/imac/imac.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MiddleSectionComponent } from './pages/middle-section/middle-section.component';
import { FooterComponent } from './pages/footer/footer.component';
import { IPodRepairComponent } from './pages/i-pod-repair/i-pod-repair.component';
import { FormComponent } from './pages/form/form.component';
import { PickupComponent } from './pages/pickup/pickup.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { AboutIServiceComponent } from './pages/about-i-service/about-i-service.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IPadRepairComponent,
    IPhoneRepairComponent,
    MainComponent,
    OnsiteRepairComponent,
    ImacComponent,
    AppleWatchRepairComponent,
    MacbookRepairComponent,
    MiddleSectionComponent,
    FooterComponent,
    IPodRepairComponent,
    FormComponent,
    PickupComponent,
    PricingComponent,
    AboutIServiceComponent,
    WhatsappComponent

  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
