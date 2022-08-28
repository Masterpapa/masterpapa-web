import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavabrComponent } from './components/navabr/navabr.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavabrComponent, FooterComponent, NotFoundComponent, ComingSoonComponent, LoaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    NavabrComponent, FooterComponent, NotFoundComponent, ComingSoonComponent, LoaderComponent
  ]
})
export class SharedModule { }
