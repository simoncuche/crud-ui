import { RouterModule, Routes } from '@angular/router';
import { FindClientComponent } from "./find-client/find-client.component";

const routes: Routes = [
  { path: 'find-client', component: FindClientComponent },
  { path: '', component : FindClientComponent}
];

export const routing = RouterModule.forRoot(routes);