import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './components/get/get.component';
import { DialCodeComponent } from './components/dial-code/dial-code.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import {
  LandingPageComponent, SignupComponent, PublicContentPlayerComponent,
  PublicCollectionPlayerComponent
} from './components';
import { SignupGuard, LandingpageGuard } from './services';
import { NuihComponent, LearnComponent, InnovateComponent } from './module/nuih';

const routes: Routes = [
  {
    path: '', canActivate: [LandingpageGuard], component: NuihComponent, data: {
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
  },
  {
    path: 'signup', component: SignupComponent,
    canActivate: [SignupGuard],
    data: {
      telemetry: {
        env: 'public', pageid: 'signup', type: 'edit', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get', component: GetComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get/dial/:dialCode', component: DialCodeComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get-dial', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/content/:contentId', component: PublicContentPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-content', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/collection/:collectionId', component: PublicCollectionPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-collection', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: ':slug/explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: 'nulp', loadChildren: './module/nulp/nulp.module#NulpModule'
  },
  {
    path: ':slug/nulp', loadChildren: './module/nulp/nulp.module#NulpModule'
  }
  // {
  //   path: 'nuih', loadChildren: './module/nuih/nuih.module#NuihModule'
  // },
  // {
  //   path: ':slug/nuih', loadChildren: './module/nuih/nuih.module#NuihModule'
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
