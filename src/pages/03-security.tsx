import * as React from "react";

export default function Page() {
    return (
        <div className="content">
            <h1 className="title is-3">
                Security of Named Data Networking
            </h1>

            <h4 className="title is-3">
                Data Authentication
            </h4>
            <p>
                In NDN, Name and content are bound together with a crypto signature.
                Data packet includes a name of the public key to verify the signature;
                where key is also a data packet and retrievable by name.
            </p>

            <br></br>  
            <br></br>  


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
                 <br></br>   
                 <br></br> 
                <p><b>Not Just Signature, but Whose Key Signed it?</b></p>


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

                <br></br>
                <br></br>

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

                



        </div>
    );
}