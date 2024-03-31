import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatComponent } from './achat.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:AchatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatRoutingModule { }
