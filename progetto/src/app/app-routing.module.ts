import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pagine/not-found/not-found.component';
import { TodoComponent } from './pagine/page1/todo/todo.component';
import { CompletedComponent } from './pagine/page2/completed/completed.component';

const routes: Routes = [
  {
    path: 'lista',
    component: TodoComponent },
    { path:'completed',
      component: CompletedComponent},
  {
    path: '',
  pathMatch: 'full',
  redirectTo: 'lista'
  },
  { path: '**',
component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
