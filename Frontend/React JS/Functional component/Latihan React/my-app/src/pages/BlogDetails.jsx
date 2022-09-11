import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetails(){
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();

    useEffect(function(){
        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`)

            if(!request.ok){
                return setNotFound(true);
            }

            const response = await request.json();
            
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params])

    if(notFound){
        return <h1>{'Halaman tidak ditemukan :('}</h1>
    }
    
    return (
        <section>
            {loading ? <i>Loading...</i> : (
                <article>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <figure>
                        <img src={article.imageUrl} alt={article.id} />
                        <figcaption>Source: <a href={article.url} target="_blank">{article.newsSite}</a></figcaption>
                    </figure>
                </article>
            )}


        </section>
    )
}

    