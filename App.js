import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import cakeContainer from './components/cakeContainer'
import icecreamContainer from './components/icecreamContainer'
import newCakeContainer from './components/newCakeContainer'

function App () {
  return (
    <Provider store={store}>
      <div>
        {/* <itemContainer cake/>
        {/* if cake was not sent as props we access the amount of icecreams which would show 20 */}
        <itemContainer />
        <HooksCakeContainer/>
        <cakeContainer/>
        <icecreamContainer/>
        <newCakeContainer /> */}
        <userContainer />
      </div>
    </Provider>
  )
}

export default App