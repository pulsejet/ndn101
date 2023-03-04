import * as React from "react";
import PacketDemo from "./PacketDemo";
import Code from "../components/Code";

import sendIntCxx from "../snippets/02-sendinterest.sn.cpp";
import sendIntPy from "../snippets/02-sendinterest.sn.py";
import sendIntTs from "../snippets/02-sendinterest.sn.ts.txt";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Communication
            </h1>

            <h2 className="title is-4">
                Part 1 &ndash; Fetching Data
            </h2>

            <div>
                NDN applications fetch data packets using Interest-Data exchanges. The process
                of such an exchange can be summarized as follows:

                <ol>
                    <li>
                        An application that desires a piece of data sends an Interest packet.<br />
                        The Interest packet contains the name of the data being requested.
                    </li>
                    <li>
                        The network forwards the Interest packet to the node(s) having a copy of the data.
                    </li>
                    <li>
                        On receiving the Interest packet, a node may reply with a matching Data packet.
                    </li>
                    <li>
                        The network the forwards this Data packet back to the requesting application.
                    </li>
                </ol>
            </div>

            <hr />
            <PacketDemo></PacketDemo>

            <hr />
            The following snippet illustrates how to send an Interest packet and get back
            the corresponding Data.

            <Code>
                <code data-lib="ndn-cxx" data-lang="c++" data-snippet={sendIntCxx}></code>
                <code data-lib="python-ndn" data-lang="python" data-snippet={sendIntPy}></code>
                <code data-lib="NDNts" data-lang="typescript" data-snippet={sendIntTs}></code>
            </Code>

            <hr />

            <h2 className="title is-4">
                Part 2 &ndash; Serving Data
            </h2>
        </div>
    );
};