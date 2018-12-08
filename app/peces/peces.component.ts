import { PecesService } from './../servicios/peces.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peces',
  templateUrl: './peces.component.html',
  styleUrls: ['./peces.component.css']
})
export class PecesComponent implements OnInit {

  peces = [];

  showDeletedMessage: boolean;
  // tslint:disable-next-line:no-inferrable-types
  searchText: string = '';

  constructor(private pecesService: PecesService) {  }

  ngOnInit() {
    this.pecesService.getPeces().subscribe(
      list => {
        this.peces = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('¿De verdad quieres liberar a esta especie?')) {
      this.pecesService.deletePez($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


}
