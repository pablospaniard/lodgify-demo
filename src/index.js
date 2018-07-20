import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './modules/App'
import './styles.css'

const rootDiv = document.createElement('div')
rootDiv.id = 'root'

document.body.appendChild(rootDiv)

ReactDOM.render(<App />, document.querySelector('#root'))
