import Link from "next/link";
import { IconType } from "react-icons/lib";
interface Props {
    text: String
    href: string
    handleClick?: () => void;
    icon?: React.ReactElement;
}

const NavButton: React.FC<Props> = ({text, href, handleClick, icon}) => {
    return (
        <Link href={`${href}`} passHref>
            <li>
                <a onClick={() => handleClick}>{text} {icon}</a>
            </li>
        </Link>
    )
}

export default NavButton