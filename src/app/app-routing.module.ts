import { NgModule } from '@angular/core';
import { BodyComponent } from './Body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './headers/top-bar-component';
import { footer } from './Footer/footer.component';

const routes: Routes = [
  {path: 'Home', component: BodyComponent },
  {path: 'search',component: footer},
  {path: 'TopBar',component: TopBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 