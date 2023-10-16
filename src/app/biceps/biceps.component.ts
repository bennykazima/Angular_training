import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.css']
})
export class BicepsComponent implements OnInit{
  data!: any[];

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe(response => {
      this.data = response;
    })
  }
}
