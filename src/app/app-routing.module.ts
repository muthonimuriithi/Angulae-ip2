import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  {path: '', component:FormComponent},
  {path: 'profile', component:FormComponent},
  {path: 'repo', component:SearchResultsComponent}
 
];

@NgModule({

  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
