import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Rutas
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: ()=> import('./website/website.module').then( mod => mod.WebsiteModule)
  },
  { 
    path: 'cms', 
    loadChildren: ()=> import('./cms/cms.module').then( mod => mod.CmsModule)
  },
  { path: '**', component: NotFoundComponent } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
