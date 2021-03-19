import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/model/cat.interface';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  url: string = '';
  catObj: ICat;
  status:boolean = false;
  favID:string;
  constructor(public catService: CatService) {
    this.randomCats();
  }

  ngOnInit(): void {}

  randomCats() {
    this.catService.randomCats().subscribe((res) => {
      this.catObj = res[0];
      this.url = this.catObj.url;
      this.status = false;
    });
  }

  likeCat() {
    if(!this.status){
      this.catService
      .likeCat(this.catObj.id)
      .subscribe((res) => {
        this.favID = res['id'];
        this.status = !this.status;
      });
    }
    else{
      this.catService.deleteFav(this.favID).subscribe(res => {
        this.status = !this.status;
      });
    }
  }

  upVote(){
    this.randomCats();
  }

  downVote(){
    this.randomCats();
  }
}
