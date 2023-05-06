import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//Rutas
import { NotFoundComponent } from './not-found/not-found.component';

//servicio
import { CustomPreloadService } from './services/custom-preload.service';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: ()=> import('./website/website.module').then( mod => mod.WebsiteModule),
    data:{
      preload: true,
    },
  },
  // { 
  //   path: 'cms', 
  //   loadChildren: ()=> import('./cms/cms.module').then( mod => mod.CmsModule),
  //   canActivate: [ AdminGuard ],
  // },
  { path: '**', component: NotFoundComponent } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }