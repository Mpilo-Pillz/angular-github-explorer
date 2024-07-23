import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';
import { RepoIconComponent } from './components/repo-icon/repo-icon.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    CardComponent,
    GridComponent,
    RepoIconComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    SearchBarComponent,
    CardComponent,
    GridComponent,
    RepoIconComponent,
  ],
})
export class SharedModule {}
