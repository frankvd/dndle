/** @jsx h */
import { h, createRef } from "preact"
import { useEffect } from "preact/hooks"

const format = (line: string) => {
    return <span dangerouslySetInnerHTML={{__html: line.replace(/(.)\u0335/g, "<s>$1</s>")}}></span>
}

export default function Repl({ lines = [] }: { lines: string[] }) {
    const containerRef = createRef()
    const bottomRef = createRef()

    useEffect(() => containerRef.current.scrollTop = bottomRef.current.offsetTop)

    return (
        <div ref={containerRef} class="repl">
            { lines.map((line) => {
                return <div>{format(line)}</div>
            })}
            <div ref={bottomRef}></div>
        </div>
    )
}