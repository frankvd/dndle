/** @jsx h */
import { h } from "preact"
import { useEffect } from "preact/hooks"

interface KeypadProps {
    onPress:  (key: string) => void
    onSubmit: () => void
    onDelete: () => void
    onClear:  () => void
}

export default function Keypad({onPress, onSubmit, onDelete, onClear}: KeypadProps) {
    const i/*(i)nput*/       = (k:string) => ({ onClick: onPress, k })
    const s/*(s)ubmit*/      = (k:string) => ({ onClick: onSubmit, k })
    const d/*(d)elete*/      = (k:string) => ({ onClick: onDelete, k })
    const ac/*(a)ll(c)lear*/ = (k:string) => ({ onClick: onClear, k })

    const keys =  [ 
        i("7"), i("8"), i("9"), ac("ac"), d("<"),
        i("4"), i("5"), i("6"), i("*"), i("/"),
        i("1"), i("2"), i("3"), i("+"), i("-"),
        i("0"), i("d"), i("k"), s("=")
    ]

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                onSubmit()
                return
            }
            if (e.key === "Backspace") {
                onDelete()
                return
            }
            keys.forEach(({k, onClick}) => {
                if (e.key === k) {
                    onClick(k)
                }
            })
        }
        document.addEventListener("keydown", listener)
        return () => {
            document.removeEventListener("keydown", listener)
        }
    })

    return <div class="keypad">
        { keys.map((key) => <button class="keypad-key" onClick={_ => key.onClick(key.k)}>{key.k}</button>)}
    </div>
}