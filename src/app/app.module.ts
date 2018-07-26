import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from '../routes';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoreimgComponent } from './moreimg/moreimg.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    NavbarComponent,
      ImageDetailComponent,
      ImageFilterPipe,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      MoreimgComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
      {path:"gallery",component:GalleryComponent},
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"moreimg",component:MoreimgComponent},
    ])
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
