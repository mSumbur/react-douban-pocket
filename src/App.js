import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home';
import Search from './pages/Search'
import Detail from './pages/Detail'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' exact component={Home} />
        <Route path='/search/:id' exact component={Search} />
        <Route path='/detail/:id/:id' exact component={Detail} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
)

export default App
