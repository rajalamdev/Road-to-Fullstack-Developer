import Image from "next/image"

export default function Posts({data: {postsApi, token, currentUser}}) {
    const userId = Number(currentUser.id);

    async function dislikeHandler(e, post){
        const liked = []
    
        const decrementLike = post.attributes.likedBy.data.length - 1;
        const dislike = post.attributes.likedBy.data.filter(user => {
            return user.id !== userId
        })
    
        dislike.map(user => {
            liked.push(user.id)
        })
    
        post.attributes.likedBy.data = dislike;
        
        e.target.innerHTML = "Like: " + decrementLike
        await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                "data": {
                    "likedBy": liked
                }
            })
        })        
    }
    
    async function likeHandler(e, post){
        const liked = []           
        const incrementLiked = post.attributes.likedBy.data.length + 1;
        
        post.attributes.likedBy.data.map(user => {
            liked.push(user.id)
        })
        liked.push(userId)
    
        post.attributes.likedBy.data = [...post.attributes.likedBy.data, {id: userId}];
    
        e.target.innerHTML = "Like: " + incrementLiked
    
        const reqLiked = await fetch(`${process.env.PUBLIC_API_URL}/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                "data": {
                "likedBy": liked
            }
            })
        })
    }

    function likeDislikeHandler(e, post){
        if(post.attributes.likedBy.data.some(user => user.id === userId)){
            return dislikeHandler(e, post)
        }else {
            return likeHandler(e, post)
        }
        
   }

  return (
    <>
        {postsApi.map(post => {
            return (
                <div key={post.id} className="mb-8 w-max-[350px] h-[100%] flex justify-center">
                    <div className="w-[350px] border-2 py-2 rounded-md">
                        <h1 className="font-bold text-xl px-2 py-2">{post.attributes.title}</h1>
                        <Image src={`${process.env.PUBLIC_API_URL}${post.attributes.image.data.attributes.url}`} width={350} height={100} /> 
                        <div className="px-2 py-2">
                            <p>Post by {post.attributes.user.data ? post.attributes.user.data.attributes.username : "Admin"}</p>
                            <p>{new Date(post?.attributes.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</p>
                            <button onClick={(e) => likeDislikeHandler(e, post)} value={false} className="border px-3 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600">Like : {post.attributes.likedBy.data.length}</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}