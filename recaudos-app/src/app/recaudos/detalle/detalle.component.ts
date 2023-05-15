import { Component, OnInit, Input } from '@angular/core';
import { recaudo } from '../recaudo';
import { recaudoService } from '../recaudo.service';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from './modal.service';

@Component({
  selector: 'detalle-recaudo',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() recaudo: recaudo;

  titulo: string = "Detalle del recaudo";
  public fotoSeleccionada: File;
  progreso: number = 0;

  constructor(private recaudoService: recaudoService,
    public modalService: ModalService) { }

  ngOnInit() { }

  cerrarModal() {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

}

