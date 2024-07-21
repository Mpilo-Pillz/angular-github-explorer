import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { RepositoriesRoutingModule } from './repositories-routing.module';

@NgModule({
  declarations: [RepositoryListComponent, RepositoryDetailsComponent],
  imports: [CommonModule, SharedModule, RepositoriesRoutingModule],
  exports: [RepositoryListComponent],
})
export class RepositoriesModule {}
