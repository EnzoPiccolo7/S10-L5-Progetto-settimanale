import { Injectable } from '@angular/core';
import { iTodo } from '../interfaccia/interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

listatodo: iTodo[] = [
]

counter:number = 0;


  constructor() { }


  mostra():iTodo[] {
    return this.listatodo;
  } 
  pushare(ele:iTodo) {
    this.counter++;
    ele.id = this.counter;
    this.listatodo.push(ele);
  }
  elimina(lista:iTodo){
    const a: number = this.listatodo.indexOf(lista);
    this.listatodo.splice(a, 1);
  }
  modifica(lista:iTodo){
    let c = this.listatodo.find((ele) => ele.id == ele.id);
    c = lista;
  }
getarr(){
  return this.listatodo;
}






}
