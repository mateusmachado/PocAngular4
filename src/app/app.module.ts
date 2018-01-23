import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesListComponent } from './modules/movies/components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './modules/movies/components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { MoviesRoutingModule } from './modules/movies/movies-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharactersListComponent,
    MovieComponent,
    CharacterComponent,
    PageNotFoundComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MoviesRoutingModule,
    AppRoutingModule,   
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
