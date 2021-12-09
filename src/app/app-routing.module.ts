import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {title: '登录'}, canActivate: [AuthGuard]},
  {
    path: '', component: LayoutComponent, data: {title: '基础框架'}, canActivateChild: [AuthGuard],
    children: [
      {path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
