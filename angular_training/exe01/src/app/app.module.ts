import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './users-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UsersListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
