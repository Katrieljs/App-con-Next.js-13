import Link from "next/link";
import styles from "./styles.module.css"

export default function Nav(){
    return(
        <>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.link}><Link calssName={styles.linkText} href={"/"}>{"Home"}</Link></li>
                    <li className={styles.link}><Link calssName={styles.linkText} href={"/about"}>{"About"}</Link></li>
                    <li className={styles.link}><Link calssName={styles.linkText} href={"/posts"}>{"Posts"}</Link></li>
                </ul>
            </nav>
        </>
    )
}