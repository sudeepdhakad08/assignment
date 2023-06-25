import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  tableData: any = [];
  searchData: any;
  apiData: any;
  showModal = false;

  dataForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  constructor(private apiService: ApiService, private route: Router) {}

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(): void {
    this.apiService.getTableData().subscribe((resp) => {
      this.tableData = resp;
      this.apiData = resp;
    });
  }
  onSearch(ev: any): void {
    let val = ev.target.value;
    if (val == '') {
      this.tableData = this.apiData;
    } else {
      this.searchData = this.onSearchData(val);
      if (this.searchData.length == 0) {
        this.tableData = [];
      } else {
        this.tableData = this.searchData;
      }
    }
  }

  onSearchData(val: any): any {
    return this.apiData.filter((value: any) => {
      return value.email.toLocaleLowerCase().includes(val.toLocaleLowerCase());
    });
  }

  onCreateButtonClick(): void {
    this.dataForm.reset();
    this.showModal = true;
  }

  onSubmitClick(): void {
    if (!this.dataForm.invalid) {
      this.showModal = false;
      this.tableData.push(this.dataForm.value);
    }
  }

  deleteRow(i: number): void {
    this.tableData.splice(i, 1);
  }

  detailsRow(data: any): void {
    this.apiService.showTableData = data
    this.route.navigateByUrl('/show-result');
  }
}
