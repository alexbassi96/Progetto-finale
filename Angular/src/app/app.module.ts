import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { GameComponent } from './components/game-component/game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { GameItemComponent } from './components/game-component/game-item/game-item.component';
import { ReviewComponent } from './components/review/review.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { FavoriteMovieItemComponent } from './components/favorite-movie-item/favorite-movie-item.component';
import { EndGameItemComponent } from './components/game-component/end-game-item/end-game-item.component';
import { RatingComponent } from './components/rating/rating.component';
import { EndGameComponent } from './components/game-component/end-game/end-game.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    GameComponent,
    GameItemComponent,
    ReviewComponent,
    WelcomeHeaderComponent,
    FavoriteMovieComponent,
    FavoriteMovieItemComponent,
    EndGameItemComponent,
    RatingComponent,
    EndGameComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
