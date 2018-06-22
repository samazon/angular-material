import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'title', 'body'];
  dataSource;
  resultsLength;
  // resultsLength;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) {


    // Assign the data to the data source for the table to render
  }
  onRowClick(e, row) {
    e.stopPropagation();
    // console.log(row);
    this.router.navigate(['/edit', row.id]).then(() => {
      this.dataService.getSinglePost.emit(row);
    });;

  }
  ngOnInit() {
    // this.dataSource = new MatTableDataSource(users);
    this.dataService.getPosts().subscribe((response:any) => {
        this.resultsLength = response.length;
        // console.log(response.body.length);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      // console.log(response.status);
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
