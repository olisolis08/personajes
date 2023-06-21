import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharactersService } from './services/characters.service';
import { CharactersComponent } from './characters/characters.component';
import { CharactersTablaComponent } from './characters-tabla/characters-tabla.component';
import { CharactersNombreComponent } from './characters-nombre/characters-nombre.component';
import { CharactersStatusComponent } from './characters-status/characters-status.component';
import { CharactersGenderComponent } from './characters-gender/characters-gender.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent, CharactersTablaComponent, CharactersNombreComponent, CharactersStatusComponent, CharactersGenderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CharactersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
