import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import ComingSoonLayout from './ComingSoonLayout.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

import Layout from './Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Partners from './pages/Partners.jsx';
import Team from './pages/Team.jsx';
import Volunteer from './pages/Volunteer.jsx';
import Dataset from './pages/Dataset.jsx';

module.exports = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ ComingSoonLayout }>
          <IndexRoute component={ ComingSoon } />
        </Route>

        <Route path="/wip" component={ Layout }>
          <Route path="home" component={ Home }/>
          <Route path="about" component={ About }/>
          <Route path="contact" component={ Contact }/>
          <Route path="partners" component={ Partners }/>
          <Route path="team" component={ Team }/>
          <Route path="volunteer" component={ Volunteer }/>
          <Route path="dataset" component={ Dataset }/>
        </Route>
      </Router>
    );
  }
});
