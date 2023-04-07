import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '../sidebar/sidebar.module';
import { SearchModule } from '../search/search.module';



@NgModule({
  imports: [
    CommonModule, SidebarModule, SearchModule
  ],
})
export class HeaderModule { }
