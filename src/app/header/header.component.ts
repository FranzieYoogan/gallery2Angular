import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {

    if(typeof document !== "undefined") {

      const spanStyle:HTMLElement | null = document.getElementById('spanStyle');

      spanStyle!.style.transition = "1s";

      spanStyle!.style.left = "5px"

      setTimeout(() => {
        spanStyle!.style.left = "0px"
      }, 1000);

    }

  }

  icon() {

    const iconElement: HTMLElement | null = document.getElementById('iconElement');

    if(iconElement) {

      iconElement.style.transition = "1s";

      iconElement.style.transform = "rotate(90deg)";

    }


  }

  iconOut() {

    const iconElement: HTMLElement | null = document.getElementById('iconElement');
 
    if(iconElement) {

      iconElement.style.transition = "1s";
      iconElement.style.transform = "rotate(0deg)";

    }

  }

}
