import Link from "next/link";
import styles from "./styles.module.css"

const fetchPosts=()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 60}}).then(res=>res.json());
}

export default async function PostsPage(){
    const posts=await fetchPosts()
    return (
        <>
           <section>
            {posts.map(post=>(
                <Link href={`posts/${post.id}`} key={post.id} title="Ir al post">
                <article className={styles.post}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
                </Link>
            ))}
           </section>
        </>
    )
}