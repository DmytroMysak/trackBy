import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'track-by-test';

  constructor(private router: Router) {}

  goToTrackBy() {
    this.router.navigate(['trackby']);
  }

  goToNoTrackBy() {
    this.router.navigate(['notrackby']);
  }
}
