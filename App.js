import React from 'react'
import Main from './Main'

import ButtonProvider from './ButtonProvider'


const App = (props) => {
    return (
        <ButtonProvider>
          <Main/>
        </ButtonProvider>
    )
}
               

 export default  App