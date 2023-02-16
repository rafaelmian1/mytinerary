import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/App.css'

import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import Header from './components/Header'
import Footer from './components/Footer'
import Itineraries from './pages/Itineraries'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import { connect } from 'react-redux'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100 papu'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cities' component={Cities} />
          <Route path='/cities/:id' component={Itineraries} />
          <Route path='/error' component={Error} />
          <Route path='/signup' component={!props.user ? SignUp : Home} />
          <Route path='/login' component={!props.user ? LogIn : Home} />
          <Redirect to='/error' />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  }
}

export default connect(mapStateToProps)(App)
