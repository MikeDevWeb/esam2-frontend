import { DocsExampleComponent } from '../../../../components/docs-example/docs-example.component';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'app-redoproject',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ListGroupDirective, ListGroupItemDirective],
  templateUrl: './redoproject.component.html',
  styleUrl: './redoproject.component.scss'
})
export class RedoprojectComponent implements OnInit {


  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  currentDate: string;


  constructor() {
    this.currentDate='';
   }

  ngOnInit() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const day = String(today.getDate()).padStart(2, '0');
    this.currentDate = `${year}-${month}-${day}`;
   }
  onSubmit1() {
    // this.customStylesValidated = true;
    // console.log('Submit... 1');
    this.tooltipValidated = true;
    console.log('ENVIADO... ');
  }
}
