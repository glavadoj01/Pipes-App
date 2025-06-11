import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Gon',
  gender: 'male',
  age: 34,
  address: 'Calle Falsa 123',
}

const client2 = {
  name: 'Ana',
  gender: 'female',
  age: 28,
  address: 'Calle Verdadera 456',
}


@Component({
  selector: 'app-uncommons-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommons-page.component.html',
})
export default class UncommonsPageComponent {

  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    }
    this.client.set(client1);
  }

  clientsNap = signal({
    '=0': 'No hay clientes esperando',
    '=1': 'Hay 1 cliente esperando',
    '=2': 'Hay 2 clientes esperando',
    'other': 'Hay # clientes esperando',
  })
  clients = signal([
    'Gonzalo',
    'Pablo',
    'María',
    'Luis',
    'Sofía',
    client1.name,
    client2.name,
  ])
  deleteClient() {
    this.clients.update( previos => previos.slice(1));
  }


  profile = {
    name: 'Random Jonshon',
    age: 25,
    address: 'Calle Mayor 123',
  }


  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola, soy un valor de una promesa');
    }, 3000);
  })

  myObservable = interval(2000).pipe(
    map( value => value + 1),
  )
}
