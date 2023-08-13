import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {



  transform(games:any[] , searchTerm:string): any[] {
    return games.filter((game)=> game.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
