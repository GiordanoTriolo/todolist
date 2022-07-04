import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedListPage } from './pages/completed-list/completed-list.page';
import { Error404Page } from './pages/error404/error404.page';
import { ListaPage } from './pages/lista/lista.page';

const routes: Routes = [
  {
    path: 'todolist',
    component: ListaPage
  },
  {
    path: 'completedlist',
    component: CompletedListPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todolist'
  },
  {
    path: '**',
    component: Error404Page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
