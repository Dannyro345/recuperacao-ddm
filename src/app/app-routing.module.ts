import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'avaliacao-modal', loadChildren: './avaliacao-modal/avaliacao-modal.module#AvaliacaoModalPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'avaliacao', loadChildren: './avaliacao/avaliacao.module#AvaliacaoPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
