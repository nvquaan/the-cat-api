import { Component, OnInit } from '@angular/core';
import { ILikedCat } from 'src/app/model/cat.interface';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent{
  likedCats: Array<ILikedCat>;
  constructor(public catService: CatService) {
    this.loadImages();
  }
  loadImages() {
    this.catService.getAllFav().subscribe(data => this.likedCats = data as Array<ILikedCat>);
  }

  deleteFav() {
    this.catService.deleteFav();
  }
}
