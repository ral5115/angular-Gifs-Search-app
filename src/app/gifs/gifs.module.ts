import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HomePageComponent,
    GifsListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
