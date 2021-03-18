import { Injectable } from '@angular/core';
import { ILikedCat } from '../model/cat.interface';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class CatService extends ApiService {
  apiURL: string = environment.baseUrl;
  likedCats: Array<ILikedCat>;

  public randomCats() {
    return this.get(this.apiURL + '/images/search');
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

  public getBreed(id: string) {
    return this.get(this.apiURL + '/images/search?breed_id=' + id);
  }

  public getAllFav() {
    return this.get(this.apiURL + '/favourites');
  }

  public deleteFav() {
    this.getAllFav().subscribe((data) => {
      const arr = data as Array<ILikedCat>;
      arr.forEach((likedCat: ILikedCat) => {
        this.delete(this.apiURL + '/favourites/' + likedCat['id']).subscribe((res) => console.log(res));
      });
    });
  }
}
