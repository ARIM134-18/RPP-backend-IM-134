import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; //ovdecemo definisati sve rute na nivou nase app

@NgModule({ //definise za neku klasu da je angular modul -- nad cime implementiramo rout modul
  imports: [RouterModule.forRoot(routes)], //nad cime implementiramo rout modul
  exports: [RouterModule] //eksportuje ceo app routing module koji importujemo u app.module.ts
})
export class AppRoutingModule { } //eksport znaci da ova klasa moze biti importovana negde drugde
//moduli su gradivni blokovi angular aplikacije, mozemo napraviti vise modula ako bismo zeleli da prosirimo app
//jer koristimo samo CRUD operacije za BP imamo samo jedan modul