import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ClientComponent } from './client/client.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    CatagoryComponent,
    ClientComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MyServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
