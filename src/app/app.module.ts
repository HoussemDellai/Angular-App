import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { DisplaylabelComponent } from './displaylabel/displaylabel.component';
import { EntertextComponent } from './entertext/entertext.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { AddtolistComponent } from './addtolist/addtolist.component';
import { DisplaymodelComponent } from './displaymodel/displaymodel.component';
import { DisplaylistmodelComponent } from './displaylistmodel/displaylistmodel.component';
import { TodorepositoryService } from './todorepository.service';
import { AddtodoComponent } from './crud-local/addtodo/addtodo.component';
import { DisolaytodoComponent } from './crud-local/disolaytodo/disolaytodo.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplaylabelComponent,
    EntertextComponent,
    DisplaylistComponent,
    AddtolistComponent,
    DisplaymodelComponent,
    DisplaylistmodelComponent,
    AddtodoComponent,
    DisolaytodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodorepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
