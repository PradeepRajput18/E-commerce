import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  customerscount=1000;
  start;
  count(){
    this.customerscount++;
  }
  timer(){
    this.start=setInterval(()=>{
         this.customerscount=this.customerscount+10;
    },1000)
  }

  public testMe() {
    // window.open( "aboutus" );
    // this.router.navigate(['/aboutus'])
  }
}
