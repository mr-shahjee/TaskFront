import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service'; 
import screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {
  disable = true
  @ViewChild("icon") icon: ElementRef
data = ["a","s","d","f"];
message: any = [];
addItem(newItem: string)
{
  this.data.push(newItem);
}

  constructor( private authService: AuthService, private router: Router, private dialog: MatDialog) {   }
  
  
  ngOnInit(): void {
     
  }
   


  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }


  logout()
  {
     
    this.router.navigate(['/login'])
    this.message = ""  
    //this.disable= !this.disable  
    //this.icon.nativeElement.style.display = "none"
    
    
  }

  // profile()
  // {
    
  //   this.router.navigate(['/material-component/profile']);    
    
  // }

}
