import { Inject, Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router"
import { AuthService } from "../services/auth.service"

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    @Inject(AuthService) private auth: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('next: ' + next.url);
    console.log('state: ' + state.url);
    return this.auth.isLoggedIn();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
