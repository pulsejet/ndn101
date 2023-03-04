import * as React from "react";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Getting Started with NDN
            </h1>

            <div>
                <p>
                    To start using NDN, you will need to first install the <b>NDN Forwarding Daemon (NFD)</b> on your computer.
                    <br />
                    There are several implementations of NFD, the most popular of which are:

                    <ul>
                        <li>
                            <a href="https://docs.named-data.net/NFD/current/INSTALL.html">NFD</a>, reference implementation (C++)
                        </li>
                        <li>
                            <a href="https://github.com/named-data/yanfd">YaNFD</a>, a multithreaded implementation (Golang)
                        </li>
                        <li>
                            <a href="https://github.com/usnistgov/ndn-dpdk">NDN-DPDK</a>, a high-performance implementation (C)
                        </li>
                        <li>
                            <a href="https://github.com/named-data-iot/ndn-lite">NDN-Lite</a>, an IoT implementation (C)
                        </li>
                    </ul>

                    <blockquote>
                        NFD is the NDN equivalent of an IP "router", and runs on <i>each node</i> in the network.
                    </blockquote>

                    Next, you will need to install a <b>client library</b> of your choice to interact with the NDN network. <br/>
                    Depending on the library, you will need the corresponding compilers / interpreters / build tools.

                    <ul>
                        <li>
                            <a href="https://github.com/named-data/ndn-cxx">ndn-cxx</a>, reference implementation (C++)
                        </li>
                        <li>
                            <a href="https://github.com/named-data/python-ndn">python-ndn</a> (Python)
                        </li>
                        <li>
                            <a href="https://github.com/yoursunny/NDNts">NDNts</a> (TypeScript)
                        </li>
                        <li>
                            <a href="https://github.com/zjkmxy/go-ndn">go-ndn</a> (Golang)
                        </li>
                        <li>
                            <a href="https://github.com/named-data-iot/ndn-lite">NDN-Lite</a>, an IoT implementation (C)
                        </li>
                        <li>
                            <a href="https://github.com/yoursunny/esp8266ndn">esp8266ndn</a> (Arduino)
                        </li>
                    </ul>

                    <blockquote>
                        The client library is the NDN equivalent of a TCP/IP "socket", and runs inside <i>each application</i>.
                    </blockquote>

                    Once you have installed NFD and a client library, you need to start NFD on your local development machine.
                    <br />
                    You are now ready to start developing NDN applications!
                </p>
            </div>
        </div>
    );
}