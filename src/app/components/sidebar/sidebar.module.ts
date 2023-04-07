import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiRootModule, TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiAccordionModule } from '@taiga-ui/kit';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { SidebarComponent } from './sidebar.component';

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
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
