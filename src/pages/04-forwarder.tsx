import * as React from "react";
import { Layouts } from "./04-forwarder/layout";

export default function Page() {
    return (
        <div className="content">
             <h1 className="title is-3">
                Named Data Networking Forwarding Daemon - NFD
            </h1>
            <h3>
                What is NFD ?
            </h3>
            <p>
                NFD is an open-source daemon designed for forwarding and receiving packets in an NDN network. NFD has the following major modules:
            </p> 

            <Layouts></Layouts>
        </div>
    );
};

