import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  IBreed,
  IBreeds,
  ICat,
  ICategory,
  ILikedCat,
} from 'src/app/_model/cat.interface';
import { CatService } from '../../_services/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  breedArr: Array<IBreed>;
  categoriesArr: Array<ICategory>;
  catArr: Array<ICat>;
  likedCats: string[] = []; //luu mang id cac anh da like
  params: object = {
    order: 'random',
    category_ids: [],
    breed_id: '',
    limit: 9,
  };
  constructor(public catService: CatService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    forkJoin([
      this.catService.getAllFav(),
      this.catService.getAllBreeds(),
      this.catService.getAllCategories(),
    ]).subscribe((data) => {
      const newData = data[0] as Array<ILikedCat>;
      this.likedCats = newData.map((data) => data.image_id);
      this.breedArr = data[1] as Array<IBreed>;
      this.categoriesArr = data[2] as Array<ICategory>;
    });
  }
  
  loadImages() {
    this.catService.getCats(this.params).subscribe((data) => {
      this.catArr = data as Array<ICat>; // luu mang obj cat
      this.catArr.forEach((cat) => {
        if (this.likedCats.includes(cat.id)) {
          cat['liked'] = true;
        } else {
          cat['liked'] = false;
        }
      });
    });
  }

  likeCat(id: string) {
    this.catService.likeCat(id).subscribe((res) => {
      console.log(res);
    });
  }
}
