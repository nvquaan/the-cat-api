import { Component, OnInit } from '@angular/core';
import { IBreed, IBreeds, ICat, ICategory } from 'src/app/model/cat.interface';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  breedArr: Array<IBreed>;
  breedObj: IBreeds;
  categoriesArr: Array<ICategory>
  catArr: Array<ICat>
  params: object = {
    order: 'random',
    category_ids: [],
    breed_id: '',
    limit: 9,
  };

  constructor(public catService: CatService) { }

  ngOnInit(): void {
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
      this.catArr = data as Array<ICat>;
      console.log(this.catArr);
      console.log(this.params)
    })
  }

  likeCat(id: string){
    this.catService.likeCat(id).subscribe((res) => {
        console.log(res);
      });
  }

}
