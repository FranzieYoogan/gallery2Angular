import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private http: HttpClient, private shared : SharedService) {}


  dataAll:any
  all() {

    this.shared.getData().subscribe(config => {
      console.log(config)
      this.dataAll = config
    },

    (error) => {

      console.log("fetching error", error)

    }
    
  );

  }

 



  dataAnswer:any
  dataAllFavorite:any
  favorite(item: any) {

    // setTimeout(() => {

    //   window.location.reload()
  
    // }, 1500);

  this.shared.getData().subscribe(config => {
    this.dataAllFavorite = config;
    

  const update = this.dataAllFavorite.map((favorite:any) => {

 
    if(favorite.favorite === "no") {

      const body = {favorite: "yes"}

      const id = item;
  
    this.shared.update(id,body).subscribe((config) => {
  
      console.log("updated", config)
  
    })  
    }


  })

  }, (error) => {
    console.log("fetching error", error);
  });

}

favoriteBack(item:any) {

  this.shared.getData().subscribe(config => {
    this.dataAllFavorite = config;
    

  const update = this.dataAllFavorite.map((favorite:any) => {

 
    if(favorite.favorite === "yes") {

      const body = {favorite: "no"}

      const id = item;
  
    this.shared.update(id,body).subscribe((config) => {
  
      console.log("updated", config)
  
    })  
    }


  })

  }, (error) => {
    console.log("fetching error", error);
  });


}

}
