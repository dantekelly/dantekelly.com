import { Component } from '@angular/core';
import {Router} from '@angular/router';


import template from './app.component.html';
import style from './app.component.scss';

import * as $ from 'jquery';

@Component({
  selector: 'app',
  template,
  styles: [ style ]
})

export class AppComponent {
  constructor(private router: Router) {
    var newnew = ['/home', '/about', '/services', '/portfolio', '/news']
    var delay = 500; // delay in milliseconds

    $(window).bind('mousewheel DOMMouseScroll', function(event){
      var newloops = newnew.indexOf(router.url);
      this.resizeTO = setTimeout(function() {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            if (newloops < newnew.length-1) {
              router.navigateByUrl(newnew[newloops+1]);
            }
        }
        else {
            // scroll down
            if (newloops > 0) {
              router.navigateByUrl(newnew[newloops-1]);
            }
        }
      }, 250);


  });
  }

}
