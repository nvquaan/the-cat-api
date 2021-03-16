import { Injectable } from '@angular/core';
import { getData, postData, deleteData } from './helpers/RequestData';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor() {}
  catObj: object; // luu object Cat khi random tim anh
  breedObj: object; // luu object Breed
  breedArr: Array<object>; // Luu mang object Breeds
  likedCats: Array<object>; //Luu mang object Cat da like

 
  async randomCats() {
    await getData('https://api.thecatapi.com/v1/images/search')
      .then((data) => (this.catObj = data[0]))
      .catch((err) => console.log(err));
  }

  
  async likeCat() {
   await postData('https://api.thecatapi.com/v1/favourites', {
      image_id: this.catObj['id'],
      sub_id: 'quan',
    })
      .then(()=>console.log("Liked id_image: "+this.catObj['id']));

  }


  async getAllBreeds() {
    await getData('https://api.thecatapi.com/v1/breeds').then(
      (data) => (this.breedArr = data)
    );
  }

  //Get breed bang id duoc truyen vao khi chon tren list
  async getBreed(id: string) {
    console.log(id);
    await getData(
      'https://api.thecatapi.com/v1/images/search?breed_id=' + id
    ).then((data) => (this.breedObj = data));
  }

  async getAllFav() {
    await getData('https://api.thecatapi.com/v1/favourites').then(
      (data) => (this.likedCats = data)
    );
  }

  async deleteFav() {
    let i = 0;
    await this.getAllFav();
    this.likedCats.forEach((likedCat) => {
      deleteData('https://api.thecatapi.com/v1/favourites', likedCat['id'])
        .then(() => console.log("Deleted id_image: " + likedCat['id']));
    })
  }
}
