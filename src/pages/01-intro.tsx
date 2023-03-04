import * as React from "react";

export default function Page() {
    return (
        <div>
            <h1 className="title is-3">
                Named Data Networking &#8211; An Introduction
            </h1>
            <p>
            The Internet's architecture, with its simple and universal network layer (IP), 
            enabled its explosive growth, but its design choices are the root cause of today's Internet problems, 
            especially when it comes to distribution networks.
            </p> 
            <p>
            Named Data Networking (NDN) retains the Internet's hourglass architecture 
            but allows the creation of completely general distribution networks by removing 
            the restriction that packets can only name communication endpoints. 
            This enables NDN networks to solve not only communication problems but also digital distribution 
            and control problems. 
            The NDN project's research challenge is to evolve it into an architectural framework capable of solving real problems,
             particularly in areas poorly served by today's Internet, through an experimental research effort that verifies and shapes the architectural direction.
            </p>
        </div>
    );
}