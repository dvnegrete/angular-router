import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: 
    [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent  },  
      { path: 'category/:id', component: CategoryComponent  },
      { path: 'product/:id', component: ProductDetailComponent  },
      { path: 'notFound', component: NotFoundComponent  },
      { path: 'myCart', component: MyCartComponent  },
      { path: 'login', component: LoginComponent  },
      { path: 'registro', component: RegisterComponent  },
      { path: 'recovery', component: RecoveryComponent  },
      { path: 'profile', component: ProfileComponent  },
    ] 
  },
  { 
    path: 'cms', 
    loadChildren: ()=> import('../cms/cms.module').then( mod => mod.CmsModule)
  },
  { path: '**', component: NotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }