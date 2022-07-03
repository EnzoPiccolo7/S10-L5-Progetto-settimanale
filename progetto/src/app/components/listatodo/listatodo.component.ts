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

  addList():void{
    let obj: iTodo = {
      id:0,
      title: this.obj,
      completed: false,
     }
  
     this.todosService.pushare(obj);
     this.obj = '';
  }
  elimina(lista:iTodo) {
    this.todosService.elimina(lista)
   

  }
  modifica(modi:iTodo)  {
    this.obj2 = modi.title;
  }
  modifica2(modi:iTodo) { 
    modi.title = this.obj2;
    this.todosService.modifica(modi);

  }

  


}
