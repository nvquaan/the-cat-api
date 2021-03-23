import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/_model/cat.interface';
import { CatService } from '../../_services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  url: string = '';
  catObj: ICat;
  status: boolean = false;
  favID: string;
  str: string = 'FAV IT';
  constructor(public catService: CatService) {
    this.randomCats();
  }

  ngOnInit(): void {}

  randomCats() {
    this.catService.getCats().subscribe((res) => {
      this.catObj = res[0];
      this.url = this.catObj.url;
      this.status = false;
      this.str = !this.status?'FAV IT':'UN-FAV IT';
    });
  }

  likeCat() {
    if (!this.status) {
      this.catService.likeCat(this.catObj.id).subscribe((res) => {
        this.favID = res['id'];
        this.status = !this.status;
        this.str = !this.status?'FAV IT':'UN-FAV IT';
      });
    } else {
      this.str = 'UN-FAV IT';
      this.catService.deleteFav(this.favID).subscribe((res) => {
        this.status = !this.status;
        this.str = !this.status?'FAV IT':'UN-FAV IT';
      });
    }
  }

  upVote() {
    this.randomCats();
  }

  downVote() {
    this.randomCats();
  }
}
