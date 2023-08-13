import { Component } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import {GetGamesService} from '../../Services/get-games.service'


@Component({
  selector: 'app-filterd-games',
  templateUrl: './filterd-games.component.html',
  styleUrls: ['./filterd-games.component.css']
})
export class FilterdGamesComponent {
  filter:any;
  tag:any;
  filteredGamed:any;

  constructor(private _ActivedRouter:ActivatedRoute , private _GetGamesService:GetGamesService){
    _ActivedRouter.paramMap.subscribe((params)=>{
      this.filter=params.get('filter') 
      console.log(params.get('filter'));
      this.tag=params.get('tag') 
      console.log(params.get('tag'));
      
  
      // _GetGamesService.filterGames(this.tag,this.filter).subscribe((game)=>{
      //   console.log({game});
      //   // this.filteredGamed=game;
        
      // })
      _GetGamesService.filterGames(this.tag,this.filter).subscribe((game)=>{
        console.log({game});
        this.filteredGamed=game;
        
      })
     
        
      
    })
  }

}
