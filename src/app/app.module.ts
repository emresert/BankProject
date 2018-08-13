import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BankComponent } from '../bank/bank.component'
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';

const routes : Routes =[
    {
        //gelen path bank olursa component olarak bank componenti aç komutunu verdik
        path:"bank",component:BankComponent 
    },
    {
        //tarayıcıya hiç bişey yazılmassa anasayfa açılsın anasayfa örnek olarak bank component seçildi
        path:"",redirectTo:"bank",pathMatch:"full" 
    },/*
    {
        path:'deteail/:id',component:DetailComponent;

    }*/
]
@NgModule({
   declarations: [
      AppComponent,
      BankComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      FormsModule, ReactiveFormsModule
    ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
