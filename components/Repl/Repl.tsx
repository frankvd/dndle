/** @jsx h */
import { h, createRef } from "preact"
import { useEffect } from "preact/hooks"

export default function Repl({ lines = [] }: { lines: string[] }) {
    const containerRef = createRef()
    const bottomRef = createRef()

    useEffect(() => containerRef.current.scrollTop = bottomRef.current.offsetTop)

    return (
        <div ref={containerRef} class="repl">
            { lines.map((line) => {
                return <div>{line}</div>
            })}
            <div ref={bottomRef}></div>
        </div>
    )
}