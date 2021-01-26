import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProcessComponent } from "./process/process.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
//import { TrackComponent } from "./track/track.component";
import { ServicesComponent } from "./services/services.component";
// import { LoginComponent } from "./auth/login/login.component";
// import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "process", component: ProcessComponent },
  { path: "contact", component: ContactComponent },
  // { path: "track", component: TrackComponent },
  // { path: "login", component: LoginComponent },
  // { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
