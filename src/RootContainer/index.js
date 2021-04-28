import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Root from '../Routes'
// Add required setup like store and other wrapers in this component
function RootContainer() {
    console.log("root container")
    return (
        <Router>
          <Root />
        </Router>
    )
}

export default RootContainer
