import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },

  {
    path: 'payment-modal',
    loadChildren: () => import('./payment-modal/payment-modal.module').then( m => m.PaymentModalPageModule)
  },
  {
    path: 'guest-modal',
    loadChildren: () => import('./guest-modal/guest-modal.module').then( m => m.GuestModalPageModule)
  },
  {
    path: 'user-data-modal',
    loadChildren: () => import('./user-data-modal/user-data-modal.module').then( m => m.UserDataModalPageModule)
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
