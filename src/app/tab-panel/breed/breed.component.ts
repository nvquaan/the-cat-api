import { Component, OnInit } from '@angular/core';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  breedArr: Array<object>;
  breedObj: object;
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.loadBreedNames();
  }

  async loadBreedNames(){
   await this.catService.getAllBreeds();
    this.breedArr = this.catService.breedArr;
  }

  async selectBreed(id: string){
    await this.catService.getBreed(id);
    this.breedObj = this.catService.breedObj[0];
  }
}
