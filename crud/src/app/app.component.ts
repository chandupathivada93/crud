import { Component, OnInit, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import { ApiService } from './services/api.service';
import { DailogComponent } from './dailog/dailog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-crud';
  displayedColumns: string[] = ['productName', 'category', 'date','freshness', 'price','Comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor (private dialog: MatDialog, private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DailogComponent, {
    width : '30%'

    }).afterClosed().subscribe(val=>{
      if(val==="save"){
        this.getAllProducts()
      }
    })
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.dataSource=new MatTableDataSource(res)
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        alert("Error while fetching records");
      }
    })

  }
  editProduct(row :any){
    this.dialog.open(DailogComponent,{
      width :'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllProducts();
      }
     
    })

  }
  deletProduct(id:number){
    this.api.deletProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product deleted Successfully")
        this.getAllProducts()
      },
      error:()=>{
        alert("Error while deleting record")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
