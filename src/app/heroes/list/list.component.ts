import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroesName:string[]=[ 'Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan America'];
public nameHeroRemove:string='';

removeLastHero():void{
  //this.nameHeroRemove=this.heroesName[this.heroesName.length-1];
  this.nameHeroRemove=this.heroesName.pop()?.toString()||'';

}

}
