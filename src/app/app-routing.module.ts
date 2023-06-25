import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultComponent } from './show-result/show-result.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/data-table', pathMatch: 'full'
  },
  {
    path:'data-table', component:DataTableComponent
  },
  {
    path:'show-result', component: ShowResultComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
