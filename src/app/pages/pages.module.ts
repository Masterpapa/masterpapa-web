import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ProjectComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[HomeComponent, AboutComponent, ContactComponent, ProjectComponent]
})
export class PagesModule { }
