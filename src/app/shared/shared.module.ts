import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RepoIconComponent } from './components/repo-icon/repo-icon.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    RepoIconComponent,
    ButtonComponent,
    TextInputComponent,
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
