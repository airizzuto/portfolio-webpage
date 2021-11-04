import Link from "next/link";
interface Props {
    text: String
    href: string
    handleClick: () => void;
}

const NavButton: React.FC<Props> = ({text, href, handleClick}) => {
    return (
        <Link href={`${href}`} passHref>
            <li>
                <a onClick={() => handleClick}>{text}</a>
            </li>
        </Link>
    )
}

export default NavButton