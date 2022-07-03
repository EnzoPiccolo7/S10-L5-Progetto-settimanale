import { Component, OnInit } from '@angular/core';
import { iTodo } from 'src/app/interfaccia/interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.component.html',
  styleUrls: ['./newtodo.component.scss']
})
export class NewtodoComponent implements OnInit {
  visualizza:boolean = false;
  listacompleta: iTodo[] = []; 
  listatodo: iTodo[] = [];

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
    this.listacompleta = this.todosService.mostra().filter((ele)=>ele.completed == true);

    setTimeout(():void => {
      this.visualizza = true;
      console.log(this.visualizza)
      }, 2000);
  }
  
  

}
