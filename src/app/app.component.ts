import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'masterpapa';
  loederShow=false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationStart) {
        this.loederShow=true;
      } else if (routerEvent instanceof NavigationEnd) {
        this.loaderHide();
      } else if (routerEvent instanceof NavigationCancel) {
       this.loaderHide();
        // Handle cancel
      } else if (routerEvent instanceof NavigationError) {
        this.loaderHide();
        // Handle error
      }
    });
  }

  loaderHide(){
    setTimeout(() => {
      this.loederShow=false;
    }, 2000);
  }
}
