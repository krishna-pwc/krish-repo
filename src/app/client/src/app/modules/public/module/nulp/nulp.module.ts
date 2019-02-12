import { NulpRoutingModule } from './nulp-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NulpContentComponent } from './components';
import { TelemetryModule } from '@sunbird/telemetry';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgInviewModule } from 'angular-inport';
import { NulpComponent } from './components/nulp/nulp.component';


@NgModule({
  imports: [
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule,
    NulpRoutingModule
  ],
  declarations: [NulpContentComponent, NulpComponent]
})
export class NulpModule { }
