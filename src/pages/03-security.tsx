import * as React from "react";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Security
            </h1>

            <h4 className="title is-4">
                Data Authentication
            </h4>
            <p>
                In NDN, Name and content are bound together with a cryptographic signature.
                Data packets include a name of the public key to verify the signature;
                where key is also a data packet and retrievable by name.
            </p>

            <div className="packets-figure">
                <div className="packet interest">
                    <div className="header">Name</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>

                <div className="arrow">
                    &harr;
                </div>

                <div className="packet interest">
                    <div className="header">Name</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>
            </div>

            <div className="packets-figure">
                <div className="packet interest">
                    <div className="name">/home/livingroom/feed/frontview/_frame=20</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>

                <div className="arrow">
                    &harr;
                </div>


                <div className="packet interest">
                    <div className="validname">/home/camera/key</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>


                <div className="arrow">
                    &harr;
                </div>

                <div className="valid">Valid</div>
            </div>

            <div className="packets-figure">
                <div className="packet interest">
                    <div className="name">/home/livingroom/feed/frontview/_frame=20</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>

                <div className="arrow">
                    &harr;
                </div>




                <div className="packet interest">
                    <div className="invalidname">/evilguy/KEY</div>
                    <div className="header">Content</div>
                    <div className="header">Signature</div>
                    <div className="header">Key-Locator</div>
                </div>


                <div className="arrow">
                    &harr;
                </div>

                <div className="invalid">Invalid</div>
            </div>

            A <b>Trust Schema</b> defines the rule that which key is supposed to sign which data packet.
            There are several design and implementations of Trust Schema, the most popular of which are:

            <ul>
                <li>
                    <a href="https://docs.named-data.net/ndn-cxx/current/tutorials/security-validator-config.html">Schema Validator</a>
                </li>

                <li>
                    <a href="https://github.com/pollere/DCT">Versec</a>
                </li>
            </ul>


            <h4 className="title is-4">
                Name-based Access Control
            </h4>

        </div>
    );
}