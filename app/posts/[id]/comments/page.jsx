import Image from "next/image";
import styles from "./styles.module.css"

const fetchComments=(id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {next: {revalidate: 60}}).then(res=>res.json());
}

export default async function CommentsPage({params}){
    const {id} = params
    const comments = await fetchComments(id)

    return (
        <>
            <ul className={styles.listOfComments}> 
                {comments.map(comment=>(
                    <li className={styles.comment} key={comment.id}>
                        <section className={styles.commentUser}>
                        <Image height={50} width={50} alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art/${comment.email}.svg`} />
                        <h3>{comment.name}</h3>
                        </section>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}