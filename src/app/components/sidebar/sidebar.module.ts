import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiRootModule, TuiButtonModule, TuiLinkModule,TuiSvgModule } from '@taiga-ui/core'
import { TuiAccordionModule } from '@taiga-ui/kit';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { SidebarComponent } from './sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiRootModule,
    TuiAccordionModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiSvgModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
