import { PecesService } from './../../servicios/peces.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpez',
  templateUrl: './addpez.component.html',
  styleUrls: ['./addpez.component.css']
})
export class AddpezComponent implements OnInit {

  constructor(private pf: FormBuilder, private pecesService: PecesService) { }

  submitted: boolean;
  showSuccessMessage: boolean;

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    if (this.pecesService.form.valid) {
      if (this.pecesService.form.get('$key').value == null) {
        this.pecesService.insertPez(this.pecesService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.pecesService.form.reset();
      this.pecesService.form.setValue({
        $key: null,
        reino: '',
        especie: '',
        familia: '',
        edad: '',
        sexo: '',
        habitat: '',
        nutricion: ''
      });
    }
  }
}


}
