import { DocsExampleComponent } from '../../../../components/docs-example/docs-example.component';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'app-verifyproject',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ListGroupDirective, ListGroupItemDirective],
  templateUrl: './verifyproject.component.html',
  styleUrl: './verifyproject.component.scss'
})
export class VerifyprojectComponent {


  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor() { }

  ngOnInit(): void { }
  onSubmit1() {
    // this.customStylesValidated = true;
    // console.log('Submit... 1');
    this.tooltipValidated = true;
    console.log('ENVIADO... ');
  }
}
