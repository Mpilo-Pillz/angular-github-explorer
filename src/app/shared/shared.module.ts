import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoIconComponent } from './components/repo-icon/repo-icon.component';

@NgModule({
  declarations: [SearchBarComponent, RepoIconComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [SearchBarComponent, RepoIconComponent],
})
export class SharedModule {}
