import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public character:Character[]=[
    {
      id:uuidv4(),
      name:'krilin',
      power:500
    },{
      id:uuidv4(),
      name: 'Goku',
      power: 10000
    },{
      id:uuidv4(),
      name: 'Vegeta',
      power: 9000
    }];

    addCharacter(nuevoChatacter:Character):void{
     const newCharacter:Character={id:uuidv4(),...nuevoChatacter};
     console.log(newCharacter);
     this.character.push(newCharacter);
    }

    deleteCharachterById(index:String):void{
     this.character=this.character.filter((character)=>character.id!==index);
      console.log('borrando pruebba'+index);
    }


}
