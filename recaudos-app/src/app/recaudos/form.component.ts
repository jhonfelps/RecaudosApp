import { Component, OnInit } from '@angular/core';
import { recaudo } from './recaudo';
import { recaudoService } from './recaudo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  maxDate: any = 0;
  public recaudo: recaudo = new recaudo();
  public titulo:string = "Crear recaudo"

  constructor(private recaudoService: recaudoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }
  public errores: string[];

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
