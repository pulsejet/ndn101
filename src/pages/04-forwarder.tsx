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
                NFD is an open-source daemon designed for forwarding and receiving packets in an NDN network. 
                NFD has the following major modules:

                <ul>

                    <li> 
                        <b>Core: </b> Provides various common services shared between different NFD modules. 
                        These include hash computation routines, DNS resolver, config file, face monitoring, and several other modules.
                    </li>

                    <li>
                        <b>Faces: </b> Implements the NDN face abstraction on top of different lower level transport mechanisms.
                    </li>

                    <li>
                        <b>Tables:</b> Implements the Content Store (CS), the Pending Interest Table (PIT), the Forwarding Information Base (FIB), 
                        and other data structures to support forwarding of NDN Data and Interest packets.
                    </li>

                    <li>
                        <b>Forwarding: </b> Implements basic packet processing pathways, which interact with Faces, Tables, and Strategies.
                    </li>

                    <li>
                        <b>Management:</b> Implements the NFD Management Protocol, which allows applications to configure NFD and set/query NFD’s internal states. 
                        Protocol interaction is done via NDN’s Interest/Data exchange between applications and NFD.
                    </li>

                    <li>
                        <b>RIB Management:</b> Manages the routing information base (RIB). The RIB may be updated by different parties in different ways, 
                        including various routing protocols, application’s prefix registrations, and command-line manipulation by sysadmins. 
                    </li>
                </ul>

            </p> 

            {/* <Layouts></Layouts> */}
        </div>
    );
};

