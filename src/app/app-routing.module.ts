import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/pages/landing/landingPage.component'
import { MessageComponent } from '../app/pages/message/message.component';
import { PostsComponent } from '../app/pages/posts/posts.component';
import { CreateComponent } from '../app/pages/create/create.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { VendorRegisterComponent } from './pages/vendorRegister/vendorRegister.component';


const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'messages', component: MessageComponent},
  { path:'posts', component: PostsComponent},
  { path:'create', component: CreateComponent},
  { path:'profile', component: ProfileComponent},
  { path:'home', component: HomeComponent},
  { path:'register', component: RegisterComponent},
  { path: 'vendorRegister', component: VendorRegisterComponent},
  { path:'**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
