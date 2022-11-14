import Image from "next/image";
import { useState } from "react";
import InfoPosts from "./InfoPosts";

export default function CardPosts(props) {
  console.log(props.postApi.attributes.authorAvatar.data[0].attributes);

  const [info, setInfo] = useState(props);

  return (
    <>
        {/* <div className="relative">
            <Image src={process.env.apiUrl + post.attributes.thumbnail.data.attributes.url} width={3} height={2} layout="responsive" alt="thumbnail" />
        </div>
        <InfoPosts {...info} /> */}
    </>
  )
}
