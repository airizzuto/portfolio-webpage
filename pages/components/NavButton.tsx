import Link from "next/link";

interface Props {
    text: String
    href: string
}

const NavButton = ({text, href}: Props) => {
    return (
        <Link href={`${href}`} passHref>
            <a>
                {text} {/* TODO: Icon */}
            </a>
        </Link>
    )
}

export default NavButton