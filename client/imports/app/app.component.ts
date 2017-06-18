import { Component } from '@angular/core';
import {Router} from '@angular/router';


import template from './app.component.html';
import style from './app.component.scss';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app',
  template,
  styles: [ style ]
})

export class AppComponent {
  constructor(private router: Router) {
    var routes = ['/home', '/about', '/services', '/portfolio', '/news']

    $(window).bind('mousewheel DOMMouseScroll', function(event){
      var currentRoute = routes.indexOf(router.url);
      this.resizeTO = setTimeout(function() {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            if (currentRoute < routes.length-1) {
              router.navigateByUrl(routes[currentRoute+1]);
            }
        }
        else {
            // scroll down
            if (currentRoute > 0) {
              router.navigateByUrl(routes[currentRoute-1]);
            }
        }
      }, 250);


  });
  }

}
