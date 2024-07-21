import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesModule } from './features/repositories/repositories.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RepositoriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
