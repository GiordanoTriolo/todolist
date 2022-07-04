import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPage } from './pages/lista/lista.page';
import { CompletedListPage } from './pages/completed-list/completed-list.page';
import { HeaderComponent } from './components/header/header.component';
import { TitleZoneComponent } from './components/title-zone/title-zone.component';
import { ListZoneComponent } from './components/list-zone/list-zone.component';
import { InsertComponent } from './components/insert/insert.component';
import { Error404Page } from './pages/error404/error404.page';
import { CompletedTitleZoneComponent } from './components/completed-title-zone/completed-title-zone.component';
import { CompletedListZoneComponent } from './components/completed-list-zone/completed-list-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPage,
    CompletedListPage,
    HeaderComponent,
    TitleZoneComponent,
    ListZoneComponent,
    InsertComponent,
    Error404Page,
    CompletedTitleZoneComponent,
    CompletedListZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
