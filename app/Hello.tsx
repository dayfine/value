import React from "react"
import HookEx from "./HookEx"

export interface IHelloProps { compiler: string; framework: string }

const Hello = (props: IHelloProps) => (
    <div>
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
        <HookEx />
    </div>
)

export default Hello
