import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'homework',
        loadChildren: () => import('../homework/homework.module').then( m => m.HomeworkPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('../fee-details/fee-details.module').then( m => m.FeeDetailsPageModule)
      },
      {
        path: 'multimedia',
        loadChildren: () => import('../multimedia/multimedia.module').then(m => m.MultimediaPageModule)
      },
      {
        path: 'notice-board',
        loadChildren: () => import('../notice-board/notice-board.module').then(m => m.NoticeBoardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'transactions',
    redirectTo: '/school',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
