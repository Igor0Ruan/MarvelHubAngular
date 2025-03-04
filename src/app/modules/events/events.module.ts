import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsComponent } from './events.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsComponent,
    EventsPageComponent
  ],
  imports: [
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
