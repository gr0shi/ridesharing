// import { Injectable } from "@angular/core"
// import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router"
// import { HomeComponent } from "src/app/system/home/home.component"


// @Injectable()
// export class DataChangesGuard
//   implements CanDeactivate<HomeComponent> {
//   constructor() { }

//   canDeactivate(
//     component: HomeComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState: RouterStateSnapshot
//   ) {
//     if (component.HomeComponent.dirty)
//       return window.confirm(
//         'Unsaved data detected. Want to exit?'
//       )
//     else return true
//   }
// }