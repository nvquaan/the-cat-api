import { Component, OnInit } from '@angular/core';
import { IBreed, IBreeds, ICat, ICategory, ILikedCat } from 'src/app/_model/cat.interface';
import { CatService } from '../../_services/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  breedArr: Array<IBreed>;
  categoriesArr: Array<ICategory>;
  catArr: Array<ICat>;
  likedCats:string[] = []; //luu mang id cac anh da like
  params: object = {
    order: 'random',
    category_ids: [],
    breed_id: '',
    limit: 9,
  };
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.catService.getAllFav().subscribe(data => {
      const newData = data as Array<ILikedCat>;
      this.likedCats = newData.map(data => data.image_id);
    });
    this.loadBreedNames();
    this.loadCategories();
  }
  
  loadBreedNames(){
    this.catService.getAllBreeds().subscribe(data => {
      this.breedArr = data as Array<IBreed>;
      // console.log(this.breedArr);
    });

  }

  loadCategories(){
    this.catService.getAllCategories().subscribe(data => {
      this.categoriesArr = data as Array<ICategory>;
      // console.log(this.categoriesArr);
    });
  }

  loadImages(){
    this.catService.getCats(this.params).subscribe(data => {
      this.catArr = data as Array<ICat>; // luu mang obj cat
      this.catArr.forEach(cat => {
        if(this.likedCats.includes(cat.id)){
          cat['liked'] = true;
        }else{
          cat['liked'] = false;
        }
      })      
    })
  }

  likeCat(id: string){
    this.catService.likeCat(id).subscribe((res) => {
        console.log(res);
      });
  }
}
