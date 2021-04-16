import NavButton from "./NavButton"
const Menu = () => {
    return (
        <nav>
            <NavButton text={"HOME"} href={"/"}/>
            <NavButton text={"PROJECTS"} href={"/projects"}/>
            <NavButton text={"ABOUT"} href={"/about"}/>
            <NavButton text={"CONTACT"} href={"/contact"}/>
        </nav>
    )
}

export default Menu