import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },

  {
    path: 'guest-modal',
    loadChildren: () => import('./guest-modal/guest-modal.module').then( m => m.GuestModalPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'conveniency-modal',
    loadChildren: () => import('./conveniency-modal/conveniency-modal.module').then( m => m.ConveniencyModalPageModule)
  },
  {
    path: 'mudanca-page',
    loadChildren: () => import('./mudanca-page/mudanca-page.module').then( m => m.MudancaPagePageModule)
  },
  {
    path: 'comunicado-modal',
    loadChildren: () => import('./comunicado-modal/comunicado-modal.module').then( m => m.ComunicadoModalPageModule)
  },
  {
    path: 'reclamacao-modal',
    loadChildren: () => import('./reclamacao-modal/reclamacao-modal.module').then( m => m.ReclamacaoModalPageModule)
  },
  {
    path: 'entrega-modal',
    loadChildren: () => import('./entrega-modal/entrega-modal.module').then( m => m.EntregaModalPageModule)
  },
  {
    path: 'list-component',
    loadChildren: () => import('./list-component/list-component.module').then( m => m.ListComponentPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
