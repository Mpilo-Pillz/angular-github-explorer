import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RepositoryListComponent],
  imports: [CommonModule, SharedModule],
  exports: [RepositoryListComponent],
})
export class RepositoriesModule {}
