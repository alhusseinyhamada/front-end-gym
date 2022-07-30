import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassComponent } from './components/class/class.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MembershipComponent } from './components/membership/membership.component';
import { Next2DaysClassesComponent } from './components/next2-days-classes/next2-days-classes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleWorkoutComponent } from './components/single-workout/single-workout.component';
import { TodayClassesComponent } from './components/today-classes/today-classes.component';
import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WorkoutDetailsComponent } from './components/workout-details/workout-details.component';


const routes: Routes = [{path:"",component: MainLayoutComponent,children:[
  {path:"",redirectTo:'home',pathMatch:'full'},//Default Path
  {path:'home',component:HomeComponent},
  {path:'contact',component:BodyComponent},
  {path:'classes',component:ClassComponent},
  {path:"classes/details",component:ClassDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'trainers',component:TrainerComponent},
  {path:'trainerdetails',component:TrainerDetailComponent},
  {path:'shop',component:ShopComponent},
  {path:'membership',component:MembershipComponent},
  {path:"classes/today's-classes",component:TodayClassesComponent},
  {path:"classes/next-2-day's-classes",component:Next2DaysClassesComponent},
  {path:"single-workout",component:SingleWorkoutComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"single-workout/workout-details",component:WorkoutDetailsComponent},
  {path:"single-workout/workout-details/exercise-details",component:ExerciseDetailsComponent},





]},
{path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
