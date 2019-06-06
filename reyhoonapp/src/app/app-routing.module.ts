import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {
  path:"second",
  component:SecondComponent
  },
  
    { path: 'fapp', component: FooterComponent },
    {path: '', component: MainComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
