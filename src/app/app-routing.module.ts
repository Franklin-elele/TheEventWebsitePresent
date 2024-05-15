import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { ItemsComponent } from './items/items.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'speaker-details',component:SpeakerDetailsComponent},
  {path:'itms',component:ItemsComponent},
  {path:'buy-ticket',component:BuyTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
