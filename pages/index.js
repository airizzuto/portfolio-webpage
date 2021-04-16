import styles from '../styles/Layout.module.scss'
import Content from "./components/Content"

export default function Home() {
  return (
    <div className={styles.container}>
      <Content
                title={"PLACEHOLDER TITLE"} 
                text={"Welcome placeholder"}
                imageSrc={"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}/>
    </div>
  )
}
