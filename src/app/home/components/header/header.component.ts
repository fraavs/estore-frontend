import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { NavigationEnd, Router } from '@angular/router';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null = null;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loadUser();  
  }

  loadUser() {
    const token = this.usersService.getToken();
    if (token) {
      this.username = this.usersService.getUserNameFromToken(token);
    }
  }

  logout() {
    this.usersService.logout().subscribe(() => {
      this.resetState();
      console.log('Logged out successfully');
      this.router.navigate(['/home'])
    });
  }

  resetState() {
    this.username = null; // Clear the username
    // Reset any other states if needed
    // For example, if you have user-related flags or data, reset them here
  }

  navigateToLogin() {
    this.router.navigate(['/home/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/home/register']);
  }

  @Output()

  searchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>();
  displaySearch: boolean = true;
  
  isUserAuthenticated: boolean = false;


  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }


  
}
