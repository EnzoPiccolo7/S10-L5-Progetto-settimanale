import { Component, OnInit } from '@angular/core';
import { iTodo } from 'src/app/interfaccia/interface';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-listatodo',
  templateUrl: './listatodo.component.html',
  styleUrls: ['./listatodo.component.scss']
})
export class ListatodoComponent implements OnInit {

  listaTodo: iTodo[] = [];

  constructor(private todosService:TodosService) { }

  ngOnInit():void {
    this.listaTodo = this.todosService.mostra();
    
  }
  

  obj!:string;
  obj2!:string;
  visualizza:boolean = true;

  addList():void{
    if (this.obj.trim() !== ""){


    this.visualizza = false;
    
    
    let obj: iTodo = {
      id:0,
      title: this.obj,
      completed: false,
     }
     setTimeout(():void => {
      this.visualizza = true;
      }, 2000);
  
     this.todosService.pushare(obj);
     this.obj = '';
    }
  }

  elimina(lista:iTodo) {
    this.visualizza = false;

    setTimeout(():void => {
      this.visualizza = true;
      }, 2000);
    this.todosService.elimina(lista)

   

  }
  modifica(modi:iTodo)  {
    this.obj2 = modi.title;
  }
  modifica2(modi:iTodo) { 
    this.visualizza = false;

    modi.title = this.obj2;
    this.todosService.modifica(modi);
    setTimeout(():void => {
      this.visualizza = true;
      }, 2000);

  }

  


}
