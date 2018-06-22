import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from './client-list';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Client[] {
  return CLIENTS;
}
}
