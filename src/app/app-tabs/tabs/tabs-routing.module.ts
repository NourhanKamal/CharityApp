import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from 'src/app/auth.guard.service';
import { AuthFBService } from 'src/app/auth-fb.service';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Charities/tab1.module').then(m => m.Tab1PageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },
      {
        path: 'tab1/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Charities/tab1.module').then(m => m.Tab1PageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },
      
      {
        path: 'tab2/maly',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../donation-type/maly/maly.module').then( m => m.MalyPageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },

      {
        path: 'tab2/ayni',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../donation-type/ayni/ayni.module').then( m => m.AyniPageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },

      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Donation-type/tab2.module').then(m => m.Tab2PageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },
      {
        path: 'tab3/id:',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Location/tab3.module').then(m => m.Tab3PageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Location/tab3.module').then(m => m.Tab3PageModule),
              canActivate: [AuthGuardService] || [AuthFBService]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      } ,
      {
        path: 'maly',
        children: [ {

          path: '',
          loadChildren: () => import('../../donation-type/maly/maly.module').then( m => m.MalyPageModule),
          canActivate: [AuthGuardService] || [AuthFBService]


        } ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      } ,
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'maly',
    loadChildren: () => import('../../donation-type/maly/maly.module').then( m => m.MalyPageModule),
    canActivate: [AuthGuardService] || [AuthFBService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
