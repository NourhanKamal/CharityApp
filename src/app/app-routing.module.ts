import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'about', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'maly',
    loadChildren: () => import('./maly/maly.module').then( m => m.MalyPageModule)
  },
  {
    path: 'ayni',
    loadChildren: () => import('./ayni/ayni.module').then( m => m.AyniPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'resala',
    loadChildren: () => import('./Gam3yat/resala/resala.module').then( m => m.ResalaPageModule)
  },
  {
    path: 'fifty-seven',
    loadChildren: () => import('./Gam3yat/fifty-seven/fifty-seven.module').then( m => m.FiftySevenPageModule)
  },
  {
    path: 'masr-elkheer',
    loadChildren: () => import('./Gam3yat/masr-elkheer/masr-elkheer.module').then( m => m.MasrElkheerPageModule)
  },
  {
    path: 'el-orman',
    loadChildren: () => import('./Gam3yat/el-orman/el-orman.module').then( m => m.ElOrmanPageModule)
  },
  {
    path: 'ahl-masr',
    loadChildren: () => import('./Gam3yat/ahl-masr/ahl-masr.module').then( m => m.AhlMasrPageModule)
  },
  {
    path: 'bank-el-ta3am',
    loadChildren: () => import('./Gam3yat/bank-el-ta3am/bank-el-ta3am.module').then( m => m.BankElTa3amPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
