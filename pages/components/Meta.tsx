import Head from "next/head"

export default function Meta() {
    return (
        <Head>
            <title>PLACEHOLDER TITLE</title>{ /*TODO: make dynamic */ }
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="programming, developing, web development" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" /> 
            <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>
        </Head>
    )
}

