
import { Component, OnInit } from '@angular/core';
import { CatService } from '../../cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
})
export class VoteComponent implements OnInit {
  url: string = 'https://cdn2.thecatapi.com/images/ks5wRxZmP.jpg';
  constructor(public catService: CatService) {
    this.randomCats();
  }

  ngOnInit(): void {
    
  }

  async randomCats() {
    await this.catService.randomCats()
    this.url = this.catService.catObj['url'];
  }

 async likeCat() {
  await  this.catService.likeCat();
    this.randomCats();
  }
}
