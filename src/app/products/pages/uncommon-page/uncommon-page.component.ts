import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //?18n SELECT

  public name: string = 'Fernando'
  public gender: 'male' | 'female' = 'male'
  public invitationMap ={
    'male': 'invitarlo',
    'female': 'invitarlo'
  }

  //? i18n PLURAL
  public clients: string[] = ['Pedro','Mario','Jafet','Steven','Vicious','Don','Star',]
  public clientsMap = {
    '=0': 'no tenemos ningun cliente en la fila',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.',
  }
  
  // ? eyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }


  //?ASYNC PIPE
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value))
  )

  public promiseValue: Promise<string>= new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data e la promesa')
    }, 3500)
  })
  


  constructor(){

  }


  changeClient():void{
    this.name = 'Melissa'
    this.gender = 'female'
  }

  deleteClient():void{
    this.clients.shift()
  }





  
}
