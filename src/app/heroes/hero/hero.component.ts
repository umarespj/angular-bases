import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name:string='iroman';
    public age:number=45;
    public metodo?:string='';

    constructor() { }
    get capitalizedName():string{
      return this.name.toUpperCase();
    }

    getHeroDescription():string{

    return `${this.name} tiene ${this.age} años`;
    }

    public changeHero():void{
      this.name = 'Spiderman';
    }

    public changeAge():void{
      this.age = 25;
    }

    resetFrom():void{
      this.name = 'iroman';
      this.age = 45;
    }

}
