import { Component, EventEmitter, Input, input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Regla: nombre+Change
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();

  //Otra forma valida desde Angular 17.2
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      width: '50',
      height: '50',
    });

    // Antigua Version
    // this.sizeChange.emit({
    //   width: '50',
    //   height: '50',
    // });
  }

  // No es correcto usar -> this.size.width=100px 
  // porque esa variable esta dedicada a escuchar no a intercambiar informacion.
}
