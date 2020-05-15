import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ProtectedRoute } from './util/route_util';
import { createBrowserHistory } from 'history';
import SignUpFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';

import WelcomePageContainer from './components/welcome/welcome_page_container';
import NavBarContainer from './components/nav/navbar_container';

import RecipeFormContainer from "./components/recipe/recipe_container";
import ItemFormComponent from "./components/item/item_form_container";
import GameFormContainer from "./components/game/game_form_container"

import RecipeIndexContainer from './components/recipe/recipes_index_container';
import ItemsContainer from "./components/item/items_container";
import GamesContainer from "./components/game/games_container";
import RecipeItemContainer from './components/recipe/recipe_item_container';
import GameShowContainer from "./components/game/game_show_container"


import RecipesIndexContainer from './components/recipe/recipes_index_container';
import ShowItemContainer from "./components/item/item_show_container";

const customHistory = createBrowserHistory();
function App() {
    return (
      <Router history={customHistory}>
        <div className="body-content">
          <header>
            <NavBarContainer />
          </header>
          <Switch history={customHistory}>
            <ProtectedRoute
              exact
              path="/register"
              component={SignUpFormContainer}
              loggedIn
            />
            <ProtectedRoute
              exact
              path="/login"
              component={LoginFormContainer}
              loggedIn
            />
            <Route exact path="/recipes" component={RecipesIndexContainer} />
            <Route exact path="/navbar" component={NavBarContainer} />

            <Route exact path="/items/new" component={ItemFormComponent} />
            <Route exact path="/games/new" component={GameFormContainer} />
            <Route exact path="/recipes/new" component={RecipeFormContainer}/>
            <Route exact path="/recipes/:id" component={RecipeIndexContainer}/>

            <Route exact path="/recipes/:recipeId" component={RecipeItemContainer} />

            <Route exact path="/items" component={ItemsContainer} />
            <Route exact path="/games" component={GamesContainer} />
            <Route exact path="/games/show" component={GameShowContainer} />
            <Route exact path="/items/:id" component={ShowItemContainer} />
            <Route exact path="/" component={WelcomePageContainer} />

          </Switch>
        </div>
      </Router>
    );
}

export default App;