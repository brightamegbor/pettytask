import { AuthService } from './account/authservice.service';
import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PettyTask';

  constructor(private auth: AuthService) {
    setTheme('bs3');
   }
}
