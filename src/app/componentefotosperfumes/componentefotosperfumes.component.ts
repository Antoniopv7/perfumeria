import { Component } from '@angular/core';

@Component({
  selector: 'mi-componentefotosperfumes',
  templateUrl: './componentefotosperfumes.component.html',
  styleUrls: ['./componentefotosperfumes.component.css']
})
export class ComponentefotosperfumesComponent{

  edad: number;

  constructor(){
    this.edad =18;
  }

  ngOnInit(): void{
    alert('Componente cargado')
  }

}
