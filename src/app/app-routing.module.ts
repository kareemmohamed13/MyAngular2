import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ClientComponent } from './client/client.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { LoginComponent } from './login/login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  

  {
    path:'', 
    redirectTo:"",
    pathMatch:'full'

  },
  {
    path:'article', 
    component:ArticleComponent,
   

  },
  {
    path:'clien', 
    component:ClientComponent,
    pathMatch:'full'

  },
  {
    path:'catagory', 
    component:CatagoryComponent,
    pathMatch:'full'

  },
  {
    path:'login', 
    component:LoginComponent,
    pathMatch:'full'


  },
  {
    path:'**', 
    component:PageNotfoundComponent,
    pathMatch:'full'


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
