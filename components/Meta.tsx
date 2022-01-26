import Head from "next/head"

export default function Meta() {
    return (
        <Head>
            {/* <!-- HTML Meta Tags --> */}
            <title>airizzuto dev</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Agustín I. Rizzuto developer portfolio webpage."/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="programming, developing, web development, full stack, software" />
            <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemProp="name" content="airizzuto dev" />
            <meta
            itemProp="description"
            content="Agustín I. Rizzuto developer portfolio webpage."
            />
            <meta
            itemProp="image"
            content="static/portfolio.png"
            />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://airizzutodeveloper.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="airizzuto dev" />
            <meta
            property="og:description"
            content="Agustín I. Rizzuto developer portfolio webpage."
            />
            <meta
            property="og:image"
            content="static/portfolio.png"
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="airizzuto dev" />
            <meta
            name="twitter:description"
            content="Agustín I. Rizzuto developer portfolio webpage."
            />
            <meta
            name="twitter:image"
            content="static/portfolio.png"
            />

        </Head>
    )
}

