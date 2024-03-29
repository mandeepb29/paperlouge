import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MybooksComponent } from './mybooks/mybooks.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [

  {
    path :'category',
    component:CategoryComponent
  },
  {
    path :'about',
    component:AboutComponent
  },
  {
    path :'contact',
    component:ContactComponent
  },
  {
    path :'mybooks',
    component:MybooksComponent
  },
  {
    path :'checkout',
    component:CheckoutComponent
  },
  {
    path :'**',
    component:MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
