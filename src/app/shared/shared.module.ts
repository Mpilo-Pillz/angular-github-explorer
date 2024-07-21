import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [SearchBarComponent],
})
export class SharedModule {}
