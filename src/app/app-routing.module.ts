import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewContainerComponent } from './Reviews/review-container/review-container.component';
import { ReviewComponent } from './Reviews/review/review.component';
import { ReviewTitleComponent } from './Reviews/review-title/review-title.component';
import { ReviewDescriptionComponent } from './Reviews/review-description/review-description.component';
import { ProfilePictureComponent } from './Reviews/profile-picture/profile-picture.component';
import { AuthorComponent } from './Reviews/author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'reviewlist',
    pathMatch: 'full'
  },
  {
    path: 'reviewlist',
    component: ReviewContainerComponent  
  },
  {
    path: 'colourpicker',
    component: ColourPickerComponent  
  },
  {
    path: 'todolist',
    component: TodoListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
