import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Service } from './auth2.service';
import { ActivityPageModule } from './activity/activity.module';

const routes: Routes = [

  { path: '', redirectTo: 'tabs', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () => import('./app-tabs/tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./app-auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./app-auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [Auth2Service]
  },
  {
    path: 'maly',
    loadChildren: () => import('./donation-type/maly/maly.module').then( m => m.MalyPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'ayni',
    loadChildren: () => import('./donation-type/ayni/ayni.module').then( m => m.AyniPageModule),
    // canActivate: [AuthGuardService]
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./app-auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./app-auth/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  

  {
    path: 'tabs/tab1/:id2/info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'tabs/tab1/info/:id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule),
    //  children:[
    //   {path: 'activity/:activity', component:ActivityPageModule}
    // ] 
    // canActivate: [AuthGuardService]
  },

  {
    path: 'tabs/tab1/:id2/info/:id/:activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'tabs/tab1/info/:id/:activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule),
     
    // canActivate: [AuthGuardService]
  },
 

  {    path: 'tabs/tab3/:id',
    loadChildren: () => import('./app-tabs/Location/tab3.module').then( m => m.Tab3PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/debt',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/sadka',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/zakah',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/orphans',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/family',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/time',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/utility',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/cloths',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/furniture',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {    path: 'tabs/tab1/books',
    loadChildren: () => import('./app-tabs/Charities/tab1.module').then( m => m.Tab1PageModule),
    // canActivate: [AuthGuardService]

  },
  {
    path: 'activity/:activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
