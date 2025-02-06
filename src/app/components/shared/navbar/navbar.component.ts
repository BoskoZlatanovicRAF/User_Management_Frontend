import {Component} from "@angular/core";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  getCurrentUserEmail(): string | null {
    return this.authService.getCurrentUserEmail();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
