import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class CatService extends ApiService {
  apiURL: string = 'https://api.thecatapi.com/v1';

  public getCats(params?: any) {
    return this.get(this.apiURL + '/images/search', params);
  }
  public likeCat(id: string) {
    return this.post(this.apiURL + '/favourites', {
      image_id: id,
      sub_id: 'quan',
    });
  }

  public getAllBreeds() {
    return this.get(this.apiURL + '/breeds');
  }

  public getBreed(id: string, params) {
    return this.get(this.apiURL + '/images/search?breed_id=' + id, params);
  }

  public getAllFav(params?: any) {
    return this.get(this.apiURL + '/favourites', params);
  }

  public deleteFav(id: string) {
    return this.delete(this.apiURL + '/favourites/' + id);
  }

  public getAllCategories() {
    return this.get(this.apiURL + '/categories');
  }

  public postFile(fileToUpload: File): Observable<object> {
    const formData: any = new FormData();
    formData.append('file', fileToUpload);
    return this.post(this.apiURL + '/images/upload', { file: fileToUpload, sub_id: 'abc' });
  }
}
