import { Component, OnInit } from '@angular/core';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent{
  likedCats: Array<object>;
  constructor(public catService: CatService) {
    this.loadImages();
  }
  async loadImages() {
    await this.catService.getAllFav();
    this.likedCats = this.catService.likedCats;
  }

  async deleteFav() {
    await this.catService.deleteFav();
  }
}
