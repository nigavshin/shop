import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core'


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, TuiInputModule, TuiSvgModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
