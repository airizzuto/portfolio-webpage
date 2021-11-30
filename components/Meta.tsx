import Head from "next/head"

export default function Meta() {
    return (
        <Head>
            <title>airizzuto {/*TODO: dynamic title here*/}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="programming, developing, web development, full stack, software" />
            <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>
        </Head>
    )
}

