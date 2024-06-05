import React, { useEffect } from "react"
export default function() {

    useEffect(() => {
        console.log("Search loaded");
        docuscout({
            container: document.getElementById("docuscout-search-bar"),
            environment: window,
            siteAPIKey: "2f36d2e1af2aa5fce81d7999edfcb5d86e79540f"
        }); 
    }, []);

    return (
        <div id="docuscout-search-bar"></div>
    )
}
                