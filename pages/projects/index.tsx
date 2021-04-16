import Content from "../components/Content"

export default function Projects() {
    return (
        <div>
            {/* TODO: replace Content component with a new grid component */}
            <Content title={"Project 1"}
                text={[
                    "At ullam porro adipisci. Quis est nostrum autem. Voluptas eos doloribus voluptatem recusandae esse modi repellat enim. Vel velit impedit suscipit       cumque    sapiente odit magni. Nulla aut eaque perferendis accusamus inventore qui voluptatibus et.",
                    "Facere aliquid sunt maxime ad atque perferendis enim. Quam voluptas molestiae aut consequatur aut officiis. Est sit modi placeat quidem nemo et quod est. Praesentium enim et itaque quisquam minima numquam."
                ]} 
                imageSrc={"static/tianyi-ma.jpg"}/>
            <Content 
                title={"Project 2"} 
                text={"Ducimus autem pariatur soluta sunt atque qui repellat. Dolores debitis illo vitae quas. Accusantium quaerat aspernatur odio aut. Magnam quis accusantium rerum at eum. Veritatis dolorum deleniti asperiores adipisci deleniti minus impedit ducimus."} 
                imageSrc={"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}/>
        </div>
    )
}