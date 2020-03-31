import { Component } from '@angular/core';

import { AppClientService} from './Service/app-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appSpringBootFrontendAngular';
  description$;
  constructor(private appClientService: AppClientService) {
  }

  fetchJson(){
    this.description$ = this.appClientService.getJsonFromApi();
  }
}
