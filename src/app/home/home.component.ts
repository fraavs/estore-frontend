import { Component } from '@angular/core';
import { SearchKeyword } from './types/searchKeyword.type';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if ((event as NavigationEnd).url === '/home') {
          router.navigate(['/home/products']);
        }
      });
  }

}
