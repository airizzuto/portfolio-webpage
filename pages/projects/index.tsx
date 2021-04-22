import ContentDisplay from "../components/ContentDisplay"
import Content from "../components/Content"

const project1: Content = { // TODO: move to a separate file
    title: "Project 1",
    info: [
        "At ullam porro adipisci. Quis est nostrum autem. Voluptas eos doloribus voluptatem recusandae esse modi repellat enim. Vel velit impedit suscipit       cumque    sapiente odit magni. Nulla aut eaque perferendis accusamus inventore qui voluptatibus et.",
        "Facere aliquid sunt maxime ad atque perferendis enim. Quam voluptas molestiae aut consequatur aut officiis. Est sit modi placeat quidem nemo et quod est. Praesentium enim et itaque quisquam minima numquam."
    ],
    imagePath: "static/tianyi-ma.jpg",
}

const project2: Content = { // TODO: move to a separate file
    title: "Project 2",
    info: [
        "Ducimus autem pariatur soluta sunt atque qui repellat. Dolores debitis illo vitae quas. Accusantium quaerat aspernatur odio aut. Magnam quis accusantium rerum at eum. Veritatis dolorum deleniti asperiores adipisci deleniti minus impedit ducimus."
    ],
    imagePath: "static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg",
}


export default function Projects() {
    return (
        <div>
            {/* TODO: replace Content component with a new grid component */}
            <ContentDisplay content={project1} />
            <ContentDisplay content={project2} />
        </div>
    )
}