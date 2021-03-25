import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './components/breed/breed.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { UploadComponent } from './components/upload/upload.component';
import { VoteComponent } from './components/vote/vote.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'breeds',
    component:BreedComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'search',
    component:SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'favorites',
    component:FavoriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'upload',
    component:UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'',
    component:VoteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
