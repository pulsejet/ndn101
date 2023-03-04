import * as React from "react";
import Code from "../components/Code";

import packetCxx from "../snippets/01-packet.sn.cpp";
import packetPy from "../snippets/01-packet.sn.py";
import packetTs from "../snippets/01-packet.sn.ts.txt";

import "./02-packets.scss";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Packet Types
            </h1>

            <div>
                At a high level, NDN utilizes two distinct types of packets:

                <ul>
                    <li>
                        <b>Interest</b> packets are used to <i>request data</i> from the network.
                        The most important component of an Interest packet is the <i>name</i> of
                        the data being requested. An Interest may contain additional parameters
                        such as a <i>lifetime</i> or <i>hop limit</i>, which are referred to as selectors.
                    </li>

                    <li>
                        <b>Data</b> packets carry the <i>actual data</i> being requested, along with
                        the name of the Data and a cryptographic signature. On receiving an Interest
                        packet, nodes in the network may respond with a Data matching the name in
                        the Interest.
                    </li>
                </ul>

                <div className="packets-figure">
                    <div className="packet interest">
                        <div className="header">Interest</div>
                        <div className="name">/edu/ucla/cs/135/notes</div>
                        <div className="selectors">
                            <div className="lifetime">Lifetime: 4000ms</div>
                        </div>
                    </div>

                    <div className="arrow">
                        &harr;
                    </div>

                    <div className="packet data">
                        <div className="header">Data</div>
                        <div className="name">/edu/ucla/cs/135/notes</div>
                        <div className="ctn">&lt;content&gt;</div>
                        <div className="signature">&lt;signature&gt;</div>
                    </div>
                </div>
            </div>

            <hr />
            The following snippet illustrates how to create Interest and Data packets in NDN.

            <Code>
                <code data-lib="ndn-cxx" data-lang="c++" data-snippet={packetCxx}></code>
                <code data-lib="python-ndn" data-lang="python" data-snippet={packetPy}></code>
                <code data-lib="NDNts" data-lang="typescript" data-snippet={packetTs}></code>
            </Code>
        </div>
    );
};