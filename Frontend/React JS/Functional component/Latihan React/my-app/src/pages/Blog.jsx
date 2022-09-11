import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog(){
    const [articles, setArticles] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function(){
        async function getArticles(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, []);

    return (
        <section>
            <h1>Blog</h1>
            <p>Berikut ini adalah tulisan tulisan gweh:</p>
            {loading && <i>Loading article...</i>}
            {!loading && (
                <>
                    {articles.map(article => {
                        return (
                            <article key={article.id}>
                                <Link to={`/blog/${article.id}`}><h2>{article.title}</h2></Link>
                                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                            </article>
                        )
                    })}
                </>
            )}
        </section>
    )
}