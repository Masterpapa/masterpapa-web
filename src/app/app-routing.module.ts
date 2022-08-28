import { HomeComponent } from './pages/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/components/about/about.component';
import { ProjectComponent } from './pages/components/project/project.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ComingSoonComponent } from './shared/components/coming-soon/coming-soon.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent, pathMatch: "full" },
  { path: "project", component: ProjectComponent, pathMatch: "full" },
  { path: "contact", component: ContactComponent, pathMatch: "full" },
  { path: "comingsoon", component: ComingSoonComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
