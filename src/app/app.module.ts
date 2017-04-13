import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routings } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { InvioceComponent } from './invioce/invioce.component';
import { PetComponent } from './pet/pet.component';
import { OwnerComponent } from './owner/owner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerService } from './owner/owner.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import { AddressComponent } from './pet/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftShopComponent } from './gift-shop/gift-shop.component';
import { GiftFormComponent } from './gift-shop/gift-form/gift-form.component';
import { GiftCreatorComponent } from './gift-shop/gift-creator/gift-creator.component';
import { GiftComboComponent } from './gift-shop/gift-combo/gift-combo.component';
import { GiftSummaryComponent } from './gift-shop/gift-summary/gift-summary.component';
import { HeroComponent } from './hero/hero.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { TodoComponent } from './todo/todo.component';
import { MessageService } from './todo/message.service';
import { TodoHomeComponent } from './todo/todohome.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroSearchService } from "./hero/hero.service";
import { HeroDashboardComponent } from "./hero/hero-dashboard.component";
import { HeroListComponent } from "./hero/hero-list.component";
import { BlogComponent } from './blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    TopnavComponent,
    InvioceComponent,
    PetComponent,
    OwnerComponent,
    DashboardComponent,
    OwnerListComponent,
    OwnerDetailsComponent,AddressComponent, GiftShopComponent, GiftFormComponent, GiftCreatorComponent, GiftComboComponent, GiftSummaryComponent, HeroComponent, HeroFormComponent, TodoComponent,TodoHomeComponent,HeroDetailComponent,HeroDashboardComponent,HeroListComponent, BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    routings,
    HttpModule
  ],
   providers: [
    OwnerService,
      MessageService,HeroSearchService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
