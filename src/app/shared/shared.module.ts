import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { RepoIconComponent } from './components/repo-icon/repo-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    RepoIconComponent,
    ButtonComponent,
    NoResultsComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    SearchBarComponent,
    RepoIconComponent,
    ButtonComponent,
    NoResultsComponent,
  ],
})
export class SharedModule {}
