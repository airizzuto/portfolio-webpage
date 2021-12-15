import Link from "next/link";

interface Props {
    text: String
    href: string
    handleClick?: () => void;
    icon?: React.ReactElement;
}

const NavButton: React.FC<Props> = ({text, href, handleClick, icon}) => {
    return (
        <li>
            <Link href={`${href}`} passHref>
                <a onClick={handleClick}>
                    {text} {icon}
                </a>
            </Link>
        </li>
    )
}

export default NavButton