import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/repositories/repositories.module').then(
        (module) => module.RepositoriesModule
      ),
  },
  {
    path: 'repositories',
    loadChildren: () =>
      import('./features/issues/issues.module').then(
        (module) => module.IssuesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
