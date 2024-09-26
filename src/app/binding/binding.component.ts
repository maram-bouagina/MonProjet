import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {
  titre : string="demo du data binding interpolation";
  status : boolean= false;
  nom : string="Bouagina Maram";
  changer_titre()
  {
    this.titre="Mon nouveau titre";
  }
  
}
