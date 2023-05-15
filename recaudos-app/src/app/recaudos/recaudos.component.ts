import { Component, OnInit, ViewChild } from '@angular/core';
import { recaudo } from './recaudo';
import { recaudoService } from './recaudo.service';
import { merge, catchError, map, startWith, switchMap, of as observableOf } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from './detalle/modal.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.css']
})
export class recaudosComponent implements OnInit {
  recaudos: recaudo[];
  paginador: any;
  search:string = '';
  pageEvent: PageEvent;
  totalData: number;
  isLoading = false;
  filterValue: string = null;
  isRateLimitReached = false;
  recaudoSeleccionado:recaudo;
  displayedColumns: string[] = ['Estacion', 'Sentido', 'Hora', 'Categoria', 'Fecha', 'Cantidad', 'VarlorTabulado'];
  dataSource = new MatTableDataSource<recaudo>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recaudoService: recaudoService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private _liveAnnouncer: LiveAnnouncer){ }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

  }

  searchKeywordFilter = new FormControl();

  getTableData$(pageNumber: number, pageSize: number, search: string) {
    return this.recaudoService.getrecaudos(pageNumber, pageSize, search);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  ngAfterViewInit() {
    merge(this.searchKeywordFilter.valueChanges, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          var filterValue = this.searchKeywordFilter.value == null ? '' : this.searchKeywordFilter.value;
          return this.getTableData$(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            filterValue
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          this.isLoading = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.totalData = data.Total;
          this.isLoading = false;
          return data.Registers;
        })
      )
      .subscribe((empData) => {
        this.recaudos = empData;
        this.dataSource = new MatTableDataSource(this.recaudos);
      });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  }

  //PDF
  downloadReport(){
    this.recaudoService.generateReport().subscribe(data => {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none');
      document.body.appendChild(a);
      a.href = url;
      a.download = 'reporte.pdf';
      a.click();
    });
  }

}
