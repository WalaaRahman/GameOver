import { Component } from '@angular/core';
import { GetGamesService } from 'src/app/Services/get-games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  allGames: any[] = [];

   constructor(private _getGamesService: GetGamesService) { }
 
   ngOnInit() {
 
     try {
       this._getGamesService.getAllGames().subscribe({
         next: (response) => {
           this.allGames = response;
         console.log(this.allGames);
         
           
         },
         error: (err) => {
           console.log({ err });
 
         }
       })
 
     } catch (error) {
       console.log({ error });
 
     }
   }
}
