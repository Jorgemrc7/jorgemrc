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
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./infinitescroll/infinitescroll.module').then( m => m.InfinitescrollPageModule)
  },
  {
    path: 'progressbar-users',
    loadChildren: () => import('./progressbar-users/progressbar-users.module').then( m => m.ProgressbarUsersPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'qrgenerator',
    loadChildren: () => import('./qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },
  {
    path: 'conwaygame',
    loadChildren: () => import('./conwaygame/conwaygame.module').then( m => m.ConwaygamePageModule)
  },
  {
    path: 'algoritmos',
    loadChildren: () => import('./algoritmos/algoritmos.module').then( m => m.AlgoritmosPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
