import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ILikedCat } from 'src/app/_model/cat.interface';
import { CatService } from '../../_services/cat.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  likedCats: Array<ILikedCat>;
  orderValue: string = 'asc';
  limitValue: number = 10;
  constructor(public catService: CatService) {
    this.loadImages();
  }

  loadImages() {
    this.catService.getAllFav({limit: this.limitValue,order: this.orderValue}).subscribe(data => this.likedCats = data as Array<ILikedCat>);
  }

  deleteAllFav() {
    const ids = this.likedCats.map(a => a.id);
    const deletes = [];
    ids.forEach(id => {
      deletes.push(this.catService.deleteFav(id));
    });
    forkJoin(deletes).subscribe(() => {
      this.loadImages();
    })
  }

  deleteFav(id: string){
    this.catService.deleteFav(id).subscribe(res => {
      console.log("DELETE "+ res['message']);
      this.loadImages();
    });
  }
  
}
