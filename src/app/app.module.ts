import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { ChildthreeComponent } from './childthree/childthree.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
