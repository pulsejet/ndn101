import * as React from "react";
import PacketDemo from "./PacketDemo";
import Code from "../components/Code";

import sendIntCxx from "../snippets/02-sendinterest.sn.cpp";
import sendIntPy from "../snippets/02-sendinterest.sn.py";
import sendIntTs from "../snippets/02-sendinterest.sn.ts.txt";
import regPfxCxx from "../snippets/02-registerprefix.sn.cpp";
import regPfxPy from "../snippets/02-registerprefix.sn.py";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Communication
            </h1>

            <h2 className="title is-4">
                Part 1 &ndash; Consumer
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

                <blockquote>
                    Applications that send Interests to fetch data packets are called <b>"Consumers"</b>.
                    <br />
                    Likewise, applications that serve Data in response to Interests are called <b>"Producers"</b>.
                </blockquote>
            </div>

            <hr />
            <PacketDemo></PacketDemo>

            <hr />
            The following snippet illustrates how to send an Interest packet and get back
            the corresponding Data.

            <br />
            <span className="has-text-grey-light">
                Note &ndash; for this example to work, you must first run the producer from the next part.
            </span>

            <Code>
                <code data-lib="ndn-cxx" data-lang="c++" data-snippet={sendIntCxx}></code>
                <code data-lib="python-ndn" data-lang="python" data-snippet={sendIntPy}></code>
                <code data-lib="NDNts" data-lang="typescript" data-snippet={sendIntTs}></code>
            </Code>

            <hr />

            <h2 className="title is-4">
                Part 2 &ndash; Producer
            </h2>

            <div>
                To serve data to other applications, a producer must register a name prefix with the
                network.

                <ol>
                    <li>
                        The producer sends a registration request to the network carrying a name prefix.
                    </li>
                    <li>
                        A route to the prefix is registered at the local forwarder, and may be propagated
                        to other forwarders in the network.
                    </li>
                    <li>
                        The producer is notified of the successful registration.
                    </li>
                    <li>
                        Any Interest packets matching the prefix may now be forwarded to the producer.
                    </li>
                </ol>
            </div>

            <hr />
            The following snippet illustrates how to serve data by registering a name prefix
            route at the local forwarder.

            <Code>
                <code data-lib="ndn-cxx" data-lang="c++" data-snippet={regPfxCxx}></code>
                <code data-lib="python-ndn" data-lang="python" data-snippet={regPfxPy}></code>
            </Code>
        </div>
    );
};