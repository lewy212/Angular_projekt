import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "./admin/user-list/user-list.component";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./home/home.component";
import { ProfileComponent } from "./home/home.component";
import { AboutComponent } from "./home/home.component";
import { UserFormularzComponent } from "./user-formularz/user-formularz.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path: 'logged', loadChildren: () =>
      import('./logged/logged.module').then((m) => m.LoggedModule)
  },
  { path: 'login', component: LoginComponent },

  { path: 'user-formularz', component: UserFormularzComponent },
  { path: 'home', component: HomeComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
