import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { IBreed, IBreeds } from '../../model/cat.interface'
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  breedArr: Array<IBreed>;
  breedObj: IBreeds;
  constructor(public catService: CatService) { }

  ngOnInit(): void {
    this.loadBreedNames();
  }

  loadBreedNames(){
    this.catService.getAllBreeds().subscribe(data => this.breedArr = data as Array<IBreed>);

  }

  selectBreed(id: string){
    this.catService.getBreed(id).subscribe(data => this.breedObj = data[0]);
    console.log(this.breedObj)
  }
}
