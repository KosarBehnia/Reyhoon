import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
const routes: Routes = [
  {
  path:"Restaurantlist",
  component:RestaurantlistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
