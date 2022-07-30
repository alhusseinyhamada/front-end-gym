import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassComponent } from './components/class/class.component';
import { AboutComponent } from './components/about/about.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TopComponent } from './components/top/top.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { LoginService } from './services/login.service';
import { ShopComponent } from './components/shop/shop.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MembershipComponent } from './components/membership/membership.component';
import { TodayClassesComponent } from './components/today-classes/today-classes.component';
import { Next2DaysClassesComponent } from './components/next2-days-classes/next2-days-classes.component';
import { SingleWorkoutComponent } from './components/single-workout/single-workout.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MainLayoutComponent,
    HomeComponent,
    NotFoundComponent,
    ClassComponent,
    AboutComponent,
    TrainerComponent,
    TopComponent,
    ClassDetailsComponent,
    TrainerDetailComponent,
    ShopComponent,
    MembershipComponent,
    TodayClassesComponent,
    Next2DaysClassesComponent,
    SingleWorkoutComponent,
    WishlistComponent,
    WorkoutDetailsComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
