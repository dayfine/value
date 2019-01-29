import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import HookEx from './HookEx'

class App extends Component {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <div className='App'>
                    <HookEx />
                </div>
            </Provider>
        )
    }
}

export default App
