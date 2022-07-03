import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './pagine/page1/todo/todo.component';
import { CompletedComponent } from './pagine/page2/completed/completed.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pagine/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { NewtodoComponent } from './components/newtodo/newtodo.component';
import { ListatodoComponent } from './components/listatodo/listatodo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    NewtodoComponent,
    ListatodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
