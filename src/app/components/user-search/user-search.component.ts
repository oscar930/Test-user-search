import { Component, EventEmitter, inject, Output, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ErrorMessageComponent],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  searchTerm = signal('');
  @Output() search = new EventEmitter<string>();

  @ViewChild(ErrorMessageComponent) errorMessageComponent!: ErrorMessageComponent;


  //private errorService = inject(ErrorMessageComponent);

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  onSearch() {
    const term = this.searchTerm().trim();

    if (term.length === 0) {
      this.errorMessageComponent.showError('El campo no puede estar vacío.');
      return;
    }

    if (term.length < 4) {
      this.errorMessageComponent.showError('Debe ingresar al menos 4 caracteres.');
      return;
    }

    if (term.toLowerCase() === 'doublevpartners') {
      this.errorMessageComponent.showError('La búsqueda de "doublevpartners" no está permitida.');
      return;
    }
    this.search.emit(this.searchTerm()); 
  
  }

}
