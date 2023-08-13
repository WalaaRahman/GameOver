import { Component, Input } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import { GetGamesService } from 'src/app/Services/get-games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {
  gameID:any;
  gameDetails:any;
constructor(private _ActivedRouter:ActivatedRoute , private _GetGamesService:GetGamesService){
  _ActivedRouter.paramMap.subscribe((params)=>{
    this.gameID=params.get('id') 
    console.log(params.get('id'));
    

    _GetGamesService.getGameDetails(this.gameID).subscribe((game)=>{
      console.log({game});
      this.gameDetails=game;
      
    })
   
      
    
  })
}
  @Input() game:any;

  hideImg:boolean = false;
  hideImage() {
    this.hideImg = !this.hideImg;

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
