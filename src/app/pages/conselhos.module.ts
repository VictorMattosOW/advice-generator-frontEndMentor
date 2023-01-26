import { ConselhosRoutingModule } from './conselhos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConselhosComponent } from './conselhos/conselhos.component';

@NgModule({
  imports: [
    CommonModule,
    ConselhosRoutingModule,
    HttpClientModule
  ],
  declarations: [ConselhosComponent]
})
export class ConselhosModule { }
