import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoktailsListComponent } from './cocktail-container/coktails-list/coktails-list.component';
import { CoktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoktailsListComponent,
    CoktailsDetailsComponent,
    CocktailContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
