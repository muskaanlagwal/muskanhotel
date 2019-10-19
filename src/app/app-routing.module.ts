import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import{ ReservationComponent } from'./reservation/reservation.component';





const routes: Routes = [
{path:'about' ,component:AboutComponent},
{path:'contact' ,component:ContactComponent},
{path:'room' ,component:RoomComponent},
{path:'' ,component:HomeComponent},
{path:'reservation',component:ReservationComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
