import { NgModule } from '@angular/core';
import { ConselhosComponent } from './conselhos/conselhos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ConselhosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConselhosRoutingModule {}