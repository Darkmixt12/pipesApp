import { Color } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent{

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = ''

  public hero: Hero[] = [
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna verde ',
      canFly: true,
      color: Color.green
    },
  ]
  
  toogleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value : keyof Hero){
    this.orderBy = value
  }
  
}
