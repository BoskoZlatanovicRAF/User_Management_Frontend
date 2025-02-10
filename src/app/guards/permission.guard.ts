import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredPermission = route.data['requiredPermission'];
    const token = localStorage.getItem('token');

    if (token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const permissions = tokenData.permissions || [];

      if (permissions.includes(requiredPermission)) {
        return true;
      }
    }

    this.router.navigate(['/users']);
    return false;
  }
}
