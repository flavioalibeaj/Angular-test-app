import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppendWordPipe } from './append-word.pipe';
import { CoursesComponent } from './courses/courses.component';
import { CoursesModule } from './courses/courses.module';
import { AlbumsComponent } from './albums/albums.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    AppendWordPipe,
    CoursesComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoursesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
