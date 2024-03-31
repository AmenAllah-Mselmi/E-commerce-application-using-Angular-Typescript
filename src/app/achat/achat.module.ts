import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchatRoutingModule } from './achat-routing.module';
import { AchatComponent } from './achat.component';


@NgModule({
  declarations: [
    AchatComponent
  ],
  imports: [
    CommonModule,
    AchatRoutingModule
  ]
})
export class AchatModule { }
