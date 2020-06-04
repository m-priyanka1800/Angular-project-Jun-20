import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewContainerComponent } from './Reviews/review-container/review-container.component';
import { ReviewComponent } from './Reviews/review/review.component';
import { ReviewTitleComponent } from './Reviews/review-title/review-title.component';
import { ReviewDescriptionComponent } from './Reviews/review-description/review-description.component';
import { ProfilePictureComponent } from './Reviews/profile-picture/profile-picture.component';
import { AuthorComponent } from './Reviews/author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http'
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReviewContainerComponent,
    ReviewComponent,
    ReviewTitleComponent,
    ReviewDescriptionComponent,
    ProfilePictureComponent,
    AuthorComponent,
    NotFoundComponent,
    NavigationComponent,
    ColourPickerComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }