import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit{
  
  showTableDetails: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
  this.showTableDetails = this.apiService.showTableData;
  }
}
