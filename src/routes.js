import React, {Component} from 'react';
import {
    Scene,
    Router,
    Stack
  } from 'react-native-router-flux';

import Pokedex from './screens/pokedex';
import Pokemon from './screens/pokemon';

const Routes = () => (
    <Router>
      <Stack key="root">
        <Scene key="pokemon" component={Pokemon} title="Pokemon" />
        <Scene key="pokedex" component={Pokedex} />
      </Stack>
    </Router>
  );

  export default Routes;