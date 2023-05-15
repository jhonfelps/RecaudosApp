export class recaudo {
    Id: number;
    Estacion: string;
    Sentido: string;
    Hora: number;
    Categoria: string;
    Fecha:Date;
    Cantidad: number;
    VarlorTabulado: number;
}

export interface RecaudosTable {
  Registers: recaudo[];
  PageIndex: number;
  PageSize: number;
  Total: number;
  TotalPages: number;
}
