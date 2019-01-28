import React from "react"
import ReactDOM from "react-dom"

import Hello from "./Hello"

declare let module: any

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root") as HTMLElement,
)

if (module.hot) {
    module.hot.accept()
}
