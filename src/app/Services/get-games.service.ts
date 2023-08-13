import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {
baseURL:String='https://free-to-play-games-database.p.rapidapi.com/api/'
  constructor(private _HttpClient:HttpClient) {

  
  }

  
  getAllGames():Observable<any> {
    
    return this._HttpClient.get(this.baseURL + 'games');
  }

  filterGames(tag?:any,filter?:any):Observable<any> {
    console.log(tag , filter);
    
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?${tag}=${filter}`);
  }
  
  

  getGameDetails(id:any):Observable<any> {
    console.log({id});
  
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`);

  }


    
}
