import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './components/vote/vote.component';
import { BreedComponent } from './components/breed/breed.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ApiInterceptor } from './_helpers/api.interceptor';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UploadComponent } from './components/upload/upload.component';
import { SearchComponent } from './components/search/search.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatSelectModule} from '@angular/material/select';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    BreedComponent,
    FavoriteComponent,
    UploadComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PaginationModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CarouselModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
