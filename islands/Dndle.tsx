/** @jsx h */
import { h } from "preact"
import { useState } from "preact/hooks"
import Keypad from "../components/Keypad/Keypad.tsx"
import Repl from "../components/Repl/Repl.tsx"

export default function Dndle() {
    const [history, setHistory] = useState([] as string[])
    const appendHistory = (value:string) => setHistory((current:string[]) => [...current, value])
    const [input, setInput] = useState("")
    const appendInput = (value:string) => setInput((current) => current+value)
    const submit = async () => {
        appendHistory("> " + input)
        appendHistory((await (await fetch("https://r3d6-api.treegnome.tech/" + input)).text()))
        setInput("") 
    }
    const deleteInput = () => setInput(input.slice(0, -1))
    const clearHistory = () => setHistory([])

    return (
        <div class="dndle">
            <Repl lines={[...history, "> " + input]}></Repl>
            <Keypad onPress={appendInput} onSubmit={submit} onDelete={deleteInput} onClear={clearHistory}></Keypad>
        </div>
    )
}