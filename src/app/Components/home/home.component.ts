import { Component } from '@angular/core';
import { GetGamesService } from 'src/app/Services/get-games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = "";
  allGames: any[] = [];
  homeGames: any[] = [];

  constructor(private _getGamesService: GetGamesService) { }

  ngOnInit() {

    try {
      this._getGamesService.getAllGames().subscribe({
        next: (response) => {
          this.allGames = response;
          this.homeGames = this.allGames.splice(0, 3)
          console.log(this.homeGames);
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
