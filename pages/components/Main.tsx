import Content from "./Content"

import styles from "./Main.module.scss"

const Main = () => {
    return (
        <div className={styles.main}>
            <Content
                title={"PLACEHOLDER TITLE"} 
                text={
                    ["At ullam porro adipisci. Quis est nostrum autem. Voluptas eos doloribus voluptatem recusandae esse modi repellat enim. Vel velit impedit suscipit cumque sapiente odit magni. Nulla aut eaque perferendis accusamus inventore qui voluptatibus et.",
                    "Ducimus autem pariatur soluta sunt atque qui repellat. Dolores debitis illo vitae quas. Accusantium quaerat aspernatur odio aut. Magnam quis accusantium rerum at eum. Veritatis dolorum deleniti asperiores adipisci deleniti minus impedit ducimus.",
                    "Facere aliquid sunt maxime ad atque perferendis enim. Quam voluptas molestiae aut consequatur aut officiis. Est sit modi placeat quidem nemo et quod est. Praesentium enim et itaque quisquam minima numquam."]
                }
                imageSrc={"/static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}/>
        </div>
    )
}

export default Main;