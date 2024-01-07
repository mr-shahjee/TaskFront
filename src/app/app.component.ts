import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  which = 'window';

  get isElement() { return this.which === 'element'; }

  get iconBottom() { 
    return this.isElement ? '45px' : '12px'; 
  }

  get iconColor() { 
    return this.isElement ? 'yellow' : '#333'; 
  }

  get iconFill() { 
    return this.isElement ? 'red' : 'white'; 
  }

  get iconSize() { 
    return this.isElement ? '60px' : '48px'; 
  }

  get iconSizeInner() { 
    return this.isElement ? '32' : '24'; 
  }

  get elementId() {
    return this.isElement ? 'my-scrolling-element-id' : ''; 
  }



  toggle() {
    this.which = this.isElement ? 'window' : 'element';
  }
 

}
