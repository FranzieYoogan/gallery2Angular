import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { RouteConfigLoadEnd } from '@angular/router';

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

    const containerAll:HTMLElement | null = document.getElementById('containerAll');
    const containerLandscapes:any = document.getElementById('containerLandscapes');

    const containerGames:any = document.getElementById('containerGames');

    const containerEmo: HTMLElement | null = document.getElementById('containerEmo');

  if(containerEmo) {

    containerEmo.style.display = "none";

  }

    containerGames.style.display = "none";

    containerLandscapes.style.display = "none";

    if(containerAll) {
  
      containerAll.style.display = "grid"
      
      
    }

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

    setTimeout(() => {

    window.location.reload()
  
    }, 100);

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

  setTimeout(() => {

    window.location.reload()
  
    }, 100);

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

dataLandscapes:any

landscapes() {

  const containerAll:HTMLElement | null = document.getElementById('containerAll');

  const containerLandscapes:any = document.getElementById('containerLandscapes');

  const containerGames:any = document.getElementById('containerGames');

  const containerEmo: HTMLElement | null = document.getElementById('containerEmo');

  if(containerEmo) {

    containerEmo.style.display = "none";

  }

  containerGames.style.display = "none";

  containerLandscapes.style.display = "grid";

  if(containerAll) {

    containerAll.style.display = "none";

  }
  
    this.shared.getDataSpecific("landscape").subscribe((configLandscapes) => {

      console.log("landscapes",configLandscapes);
      
      this.dataLandscapes = configLandscapes;
    })

  }

  dataGames:any
  games() {
    const containerAll: HTMLElement | null = document.getElementById('containerAll');
    const containerLandscapes: HTMLElement | null = document.getElementById('containerLandscapes');
    const containerGames: HTMLElement | null = document.getElementById('containerGames');
    const containerEmo: HTMLElement | null = document.getElementById('containerEmo');

    if(containerEmo) {

      containerEmo.style.display = "none";

    }

    // Check if containerGames is not null before trying to manipulate it
    if (containerGames) {
        containerGames.style.display = "grid";
    } else {
        console.error("containerGames not found");
    }

    if (containerLandscapes) {
        containerLandscapes.style.display = "none";
    } else {
        console.error("containerLandscapes not found");
    }

    if (containerAll) {
        containerAll.style.display = "none";
    } else {
        console.error("containerAll not found");
    }

    this.shared.getDataSpecific("games").subscribe((configGames) => {
        console.log("Games Data:", configGames);
        this.dataGames = configGames;
    });
}

dataEmo:any 
  emo() {
    const containerAll: HTMLElement | null = document.getElementById('containerAll');
    const containerLandscapes: HTMLElement | null = document.getElementById('containerLandscapes');
    const containerGames: HTMLElement | null = document.getElementById('containerGames');
    const containerEmo: HTMLElement | null = document.getElementById('containerEmo');
    const empty:any = document.getElementById('empty');

    if(containerEmo) {

      containerEmo.style.display = "flex";

    }

    // Check if containerGames is not null before trying to manipulate it
    if (containerGames) {
        containerGames.style.display = "none";
    } else {
        console.error("containerGames not found");
    }

    if (containerLandscapes) {
        containerLandscapes.style.display = "none";
    } else {
        console.error("containerLandscapes not found");
    }

    if (containerAll) {
        containerAll.style.display = "none";
    } else {
        console.error("containerAll not found");
    }

    this.shared.getDataSpecific("emo").subscribe((configEmo) => {
        console.log("Emo Data:", configEmo);
        this.dataEmo = configEmo;



          empty.style.display = "none"

    

      

        

    }, error => {

      console.log("fetching empty", error)
      empty.style.display = "block"

    });

   

    }

}




