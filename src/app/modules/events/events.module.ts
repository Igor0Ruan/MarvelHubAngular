import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsComponent } from './events.component';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsPageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EventsModule { }
