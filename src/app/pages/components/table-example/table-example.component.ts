import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { CommonService } from 'src/app/shared/services/common.service';
import { TableExampleService } from 'src/app/shared/services/table-example.service';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss'],
})
export class TableExampleComponent implements OnInit {
  booksData: any;
  dataSource: any;
  @ViewChild(MatSort , {static: false})
  sort: MatSort = new MatSort();
  displayedColumns: string[] = ['Id', 'BookImage', 'BookName', 'CreateDate'];
  constructor(
    private tableservice: TableExampleService,
    private commonservice: CommonService
  ) {}

  ngOnInit(): void {
    this.getBooksData();
  }
  /**
   * Call service method to get books data.
   */
  async getBooksData() {
    try {
      this.commonservice.showLoader();
      const res: any = await this.tableservice.getBooksData();
      if (res) {
        console.log(res);
        this.commonservice.hideLoader();
        this.booksData = res.data;
        this.dataSource = new MatTableDataSource(this.booksData);
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return (
            data.attributes.content.toLocaleLowerCase().includes(filter) ||
            data.id.toLocaleLowerCase().includes(filter)
          );
        };
        this.dataSource.sort = this.sort;
      }
    } catch (e) {}
  }
  /**
   * To filter table data
   */
  applyFilter(event: any) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  sortTableData(){

  }
}
