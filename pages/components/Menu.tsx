import NavButton from "./NavButton"

const Menu = () => {
    return (
        <ul>
            <li><NavButton text={"HOME"} href={"/"}/></li>
            <li><NavButton text={"PROJECTS"} href={"/projects"}/></li>
            <li><NavButton text={"ABOUT"} href={"/about"}/></li>
            <li><NavButton text={"CONTACT"} href={"/contact"}/></li>
        </ul>
    )
}

export default Menu