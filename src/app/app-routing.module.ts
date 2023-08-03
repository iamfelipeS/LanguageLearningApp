import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'business',
    component: BusinessComponent
  },

  {
    path:'quiz',
    component: QuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
