import * as React from "react";
import "./Code.scss";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props: any) {
    const [activeIdx, setIdxI] = React.useState(0);
    const [snippet, setSnippet] = React.useState('');

    async function setIdx(idx: number) {
        await fetchSnippet();
        setIdxI(idx);
    }

    async function fetchSnippet() {
        const res = await fetch(props.children[activeIdx].props['data-snippet']);
        setSnippet(await res.text());
    }

    fetchSnippet();

    return (
        <div className="component-code-container">
            <div className="tabs">
                <ul>
                    {props.children.map((child: any, idx: number) => {
                        return <li
                            key={child.props['data-lib']}
                            className={idx === activeIdx ? 'is-active' : ''}
                            onClick={() => setIdx(idx)}>

                            <a>{child.props['data-lib']}</a>
                        </li>;
                    })}
                </ul>
            </div>

            <div className="code">
                <SyntaxHighlighter language={props.children[activeIdx].props['data-lang']} style={vs}>
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};