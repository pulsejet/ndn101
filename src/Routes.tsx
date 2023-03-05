import * as React from "react";

import Page01Intro from "./pages/01-intro";
import Page02GettingStarted from "./pages/02-getting-started";
import Page03Packets from "./pages/03-packets";
import Page04Communication from "./pages/04-communication";
import Page05Multicast from "./pages/05-multicast";
import Page06Security from "./pages/06-security";

export default [
    {
        path: "/",
        label: "Introduction",
        elem: <Page01Intro />,
    },
    {
        path: "/getting-started",
        label: "Getting Started",
        elem: <Page02GettingStarted />,
    },
    {
        path: "/packets",
        label: "Packet Types",
        elem: <Page03Packets />,
    },
    {
        path: "/communication",
        label: "Communication",
        elem: <Page04Communication />,
    },
    {
        path: "/multicast",
        label: "Data Multicast",
        elem: <Page05Multicast />,
    },
    {
        path: "/security",
        label: "Security",
        elem: <Page06Security />,
    },
] as {
    path: string;
    label: string;
    elem: JSX.Element;
}[];
