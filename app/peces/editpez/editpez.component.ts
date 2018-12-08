import { Router, ActivatedRoute } from '@angular/router';
import { PecesService } from './../../servicios/peces.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpez',
  templateUrl: './editpez.component.html',
  styleUrls: ['./editpez.component.css']
})
export class EditpezComponent implements OnInit {


  constructor(private pf: FormBuilder, private pecesService: PecesService, private router: Router) { }

  showSuccessMessage: boolean;

  ngOnInit() {
  }

  guardarCambios() {
    this.pecesService.updatePez(this.pecesService.form.value);
    this.router.navigate(['/peces']);

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
