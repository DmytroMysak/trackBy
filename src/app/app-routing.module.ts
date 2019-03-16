import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrackByComponent} from './track-by/track-by.component';
import {NoTrackByComponent} from './no-track-by/no-track-by.component';

const routes: Routes = [
  {path: 'notrackby', component: NoTrackByComponent},
  {path: 'trackby', component: TrackByComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
