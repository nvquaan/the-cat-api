import { Component, OnInit } from '@angular/core';
import { CatService } from '../../_services/cat.service';
import { IBreed, IBreeds } from '../../_model/cat.interface'
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {
  breedArr: Array<IBreed>;
  breedObjArr: Array<IBreeds>;
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.loadBreedNames();
  }

  loadBreedNames(){
    this.catService.getAllBreeds().subscribe(data => this.breedArr = data as Array<IBreed>);

  }

  selectBreed(id: string){
    this.catService.getBreed(id, {limit: 5}).subscribe(data => {
      this.breedObjArr = data as Array<IBreeds>;
      console.log(this.breedObjArr);
    });
  }
}
