import NavButton from "./NavButton"
const Menu = () => {
    return (
        <menu>
            <menuitem><NavButton text={"HOME"} href={"/"}/></menuitem>
            <menuitem><NavButton text={"PROJECTS"} href={"/projects"}/></menuitem>
            <menuitem><NavButton text={"ABOUT"} href={"/about"}/></menuitem>
            <menuitem><NavButton text={"CONTACT"} href={"/contact"}/></menuitem>
        </menu>
    )
}

export default Menu