import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxClipPathComponent } from './box-clip-path/box-clip-path.component';
import { BoxMouseMoveComponent } from './box-mouse-move/box-mouse-move.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxClipPathComponent,
    BoxMouseMoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
