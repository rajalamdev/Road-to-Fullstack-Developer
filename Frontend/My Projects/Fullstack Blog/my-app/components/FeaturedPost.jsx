import Image from "next/image";
import InfoPosts from "./InfoPosts";
import {formatDate} from "../utility/formatDate"

export default function FeaturedPost(props) {

  return (
    <article className="flex flex-wrap">
      <div className="w-full md:w-8/12 md:pr-6">
        <div className="relative">
          <Image
            src={process.env.apiUrl + props.thumbnail.data.attributes.url}
            width={3}
            height={2}
            layout="responsive"
            className="rounded-md"
            priority
            alt="thumbnail"
          />
        </div>
      </div>
      <div className="w-full md:w-4/12">
        <InfoPosts 
          category={props.category}
          date={formatDate(props.publishedAt)}
          title={props.title}
          headline={props.headline}
          authorAvatar={process.env.apiUrl + props.authorAvatar.data[0].attributes.url}
          authorName={props.authorName}  
          authorJob={props.authorJob}
          slug = {props.slug}
        />
      </div>
    </article>
  );
}
