import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

declare let module: any

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement,
)

if (module.hot) {
    module.hot.accept()
}
