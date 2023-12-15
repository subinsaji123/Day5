import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { MaybeForwardRefExpression } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private api:ApiService){}
ngOnInit(){
  this.fetchData()
  }
  data:any
  fetchData(){
    this.api.getData().subscribe((response:any)=>{
      this.data= response
    }
    )
  }
  
}
