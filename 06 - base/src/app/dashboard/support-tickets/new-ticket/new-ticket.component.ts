import { ButtonComponent } from './../../../shared/button/button.component';
import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {

    // onSubmit(titleInput: HTMLInputElement){
    //   const enteredTitle = titleInput.value;
    //   console.log("Entered Title: " + enteredTitle);
    //   console.dir(titleInput);
    // }
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

    // Con señal (necesario Angular v17.3)
    //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

    ngOnInit(): void {
      console.log("ONINIT");
      console.log(this.form?.nativeElement);
    }

    //garantiza tener acceso a los elementos de viewchild()
    ngAfterViewInit() {
      console.log("AFTER VIEW INIT");
      console.log(this.form?.nativeElement);
    }
    onSubmit(titleInput: string, ticketText: string){
      console.log("Entered Title: " + titleInput);
      console.log("Entered Text: " + ticketText);
    
      this.form?.nativeElement.reset();
      
    }
}
