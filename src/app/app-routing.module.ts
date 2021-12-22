import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaselabComponent } from './base-lab/base-lab.component';


const routes: Routes = [

  { path: '', redirectTo: 'base/lab', pathMatch: 'full' },
  
  {    path: '', component: BaselabComponent, children: [

      {
        path: 'base', loadChildren: () => import('./base-lab/base-lab.module').then(b => b.BaselabModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
