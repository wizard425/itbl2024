import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { PasswordService } from '../../../../core/services/scenario-services/password.service';
import { LexiconService } from '../../../../shared/lexicon/lexicon.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    console.log(control?.invalid);
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-passwordfield',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './passwordfield.component.html',
  styleUrl: './passwordfield.component.scss'
})
export class PasswordfieldComponent {

  pwdFormControl = new FormControl('', [Validators.required, Validators.min(6)]);

  matcher = new MyErrorStateMatcher();

  public passwordField: string = "";

  constructor(private router: Router, private act: ActivatedRoute, private passwordService: PasswordService,
    protected lex: LexiconService
  ) {
lex.isVisible = true;
  }

  goToAnalyze() {
    this.passwordService.password = this.passwordField;
    this.router.navigate(["../analyze"], { relativeTo: this.act });
  }



}
