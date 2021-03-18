import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/model/cat.interface';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  url: string = '';
  catObj: ICat;
  constructor(public catService: CatService) {
    this.randomCats();
  }

  ngOnInit(): void {}

  randomCats() {
    this.catService.randomCats().subscribe((res) => {
      this.catObj = res[0];
      this.url = this.catObj.url;
    });
  }

  likeCat() {
    this.catService
      .likeCat(this.catObj.id)
      .subscribe((res) => console.log(res));
    this.randomCats();
  }
}
