import Content from "../components/Content"
import ContentDisplay from "../components/ContentDisplay"

const projects = [
  { // TODO: move to a separate file
    title: "Project 1",
    text: [
        "At ullam porro adipisci. Quis est nostrum autem. Voluptas eos doloribus voluptatem recusandae esse modi repellat enim. Vel velit impedit suscipit       cumque    sapiente odit magni. Nulla aut eaque perferendis accusamus inventore qui voluptatibus et.",
        "Facere aliquid sunt maxime ad atque perferendis enim. Quam voluptas molestiae aut consequatur aut officiis. Est sit modi placeat quidem nemo et quod est. Praesentium enim et itaque quisquam minima numquam."
    ],
    image: "static/tianyi-ma.jpg",
  },
  {
      title: "Project 2",
      text: [
          "Ducimus autem pariatur soluta sunt atque qui repellat. Dolores debitis illo vitae quas. Accusantium quaerat aspernatur odio aut. Magnam quis accusantium rerum at eum. Veritatis dolorum deleniti asperiores adipisci deleniti minus impedit ducimus."
      ],
      image: "static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg",
  },
]

export default function Projects() {
    return (
        <>
            {/* TODO: replace Content component with a new grid component */}
            <ContentDisplay contents={projects} />
        </>
    )
}