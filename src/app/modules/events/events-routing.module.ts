import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsPageComponent } from './events-page/events-page.component';

export const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: ':id', component: EventsPageComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
