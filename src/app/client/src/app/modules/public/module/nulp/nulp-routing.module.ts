import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NulpContentComponent, NulpComponent } from './components';
const routes: Routes = [
  {
    path: ':pageNumber', component: NulpContentComponent, data: {
      telemetry: {
        env: 'public', pageid: 'nulp', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: '', component: NulpComponent, data: {
      telemetry: {
        env: 'public', pageid: 'nulp', type: 'view', subtype: 'paginate'
      }
    }
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NulpRoutingModule { }
