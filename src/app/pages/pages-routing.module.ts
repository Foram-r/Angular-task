import { TextReplaceComponent } from './components/text-replace/text-replace.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent, children:[
     {path:'', redirectTo:'table-example', pathMatch:'full'},
    {
      path:'table-example',
      component : TableExampleComponent
    },
    {
      path:'text-replace',
      component : TextReplaceComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
