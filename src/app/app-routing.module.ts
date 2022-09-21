import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'walk-through',
    loadChildren: () => import('./walk-through/walk-through.module').then( m => m.WalkThroughPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./multimedia/multimedia.module').then( m => m.MultimediaPageModule)
  },
  {
    path: 'fee-details',
    loadChildren: () => import('./fee-details/fee-details.module').then( m => m.FeeDetailsPageModule)
  },
  {
    path: 'examination',
    loadChildren: () => import('./examination/examination.module').then( m => m.ExaminationPageModule)
  },
  {
    path: 'notice-board',
    loadChildren: () => import('./notice-board/notice-board.module').then( m => m.NoticeBoardPageModule)
  },
  {
    path: 'exam-content',
    loadChildren: () => import('./exam-content/exam-content.module').then( m => m.ExamContentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'academics',
    loadChildren: () => import('./academics/academics.module').then( m => m.AcademicsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
