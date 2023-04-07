import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from "./components/sidebar/sidebar.module";
import { SearchModule } from "./components/search/search.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TuiRootModule, TuiDialogModule, TuiAlertModule, SidebarModule, SearchModule]
})
export class AppModule { }
