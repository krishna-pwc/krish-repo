import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuihComponent, LearnComponent, InnovateComponent } from './components';
const routes: Routes = [
  {
    path: '', component: NuihComponent, data: {
      telemetry: {
        env: 'public', pageid: 'nuih', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'learn', component: LearnComponent, data: {
      telemetry: {
        env: 'public', pageid: 'learn', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'innovate', component: InnovateComponent, data: {
      telemetry: {
        env: 'public', pageid: 'innovate', type: 'view', subtype: 'paginate'
      }
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuihRoutingModule { }
