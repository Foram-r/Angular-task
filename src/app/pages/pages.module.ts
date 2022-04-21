import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { TextReplaceComponent } from './components/text-replace/text-replace.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    TableExampleComponent,
    TextReplaceComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PagesModule { }
