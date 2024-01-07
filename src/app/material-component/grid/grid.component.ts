import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridData: []
  messages: any

  constructor(private authService: AuthService ) { }

  store:any
  date1: any
  treatment: any
  dblClickEvent(grid:any, event:any) {
     debugger;
     this.store = (event.path[1].innerText)
     const parts = this.store .split(",").map((text: string, index: number) => {
      return {
        position: index+1,
        message: text.trim()
      }
    });
    this.messages = parts[0].message.split("\t")[2]
     //alert(this.message)
     
    //  this.date1 = event.path[1].innerText.slice(1, 20);
    //  this.treatment = event.path[1].innerText.slice(20, -2)
    //  alert(this.date1 + " "+ this.treatment)
 // alert('the selected row is ' + event.path[1].textContent);
  //use the following line if you want to get the clicked cell content:
  //console.log('clicked cell content'+ event.path[0].textContent);
  //console.log('clicked cell content'+ event.path.textContent);
  //alert(this.messages) 

}

  ngOnInit(): void {
    this.authService.getJobForm().subscribe({
      next: (res: any) => {
        this.gridData = res;
        console.log(this.gridData)
      },
      error: () => {
        alert("error")
      }
    })
  }

}



 class Customer {
  public Id = "";
  public CompanyName = "";
  public ContactName = "";
  public ContactTitle = "";
  public City = "";
}