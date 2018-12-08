import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class PecesService {


  constructor(private firebase: AngularFireDatabase) { }

listapeces: AngularFireList<any>;

form = new FormGroup({
  $key: new FormControl(null),
  reino: new FormControl('', Validators.required),
  especie: new FormControl('', Validators.required),
  familia: new FormControl('', Validators.required),
  edad: new FormControl('', Validators.required),
  sexo: new FormControl('', Validators.required),
  habitat: new FormControl('', Validators.required),
  nutricion: new FormControl('', Validators.required),
});

getPeces() {
  this.listapeces = this.firebase.list('peces');
  return this.listapeces.snapshotChanges();
}

insertPez(peces) {
  this.listapeces.push({
    reino: peces.reino,
    especie: peces.especie,
    familia: peces.familia,
    edad: peces.edad,
    sexo: peces.sexo,
    habitat: peces.habitat,
    nutricion: peces.nutricion
  });
}

rellenar(peces) {
  this.form.setValue(peces);
}

  updatePez(peces) {
    this.listapeces.update(peces.$key,
      {
        reino: peces.reino,
        especie: peces.especie,
        familia: peces.familia,
        edad: peces.edad,
        sexo: peces.sexo,
        habitat: peces.habitat,
        nutricion: peces.nutricion
      });
  }


  deletePez($key: string) {
    this.listapeces.remove($key);
  }


}
