import Image from "next/image";
import InfoPosts from "./InfoPosts";

export default function FeaturedPost() {
  const featuredPost = {
    thumbnail: "/thumbnail-1.png",
    category: "UI DESIGN",
    date: "JULY 2 2022",
    title:
      "Understanding color theory: the color wheel and finding complementary colors",
    desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    authorAvatar: "/author-1.png",
    authorName: "Leslie Alexander",
    authorJob: "UI DESIGNER",
  };

  return (
    <article className="flex flex-wrap">
      <div className="w-full md:w-8/12 md:pr-6">
        <div className="relative">
          <Image
            src={featuredPost.thumbnail}
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
          category={featuredPost.category}
          date={featuredPost.date}
          title={featuredPost.title}
          desc={featuredPost.title}
          authorAvatar={featuredPost.authorAvatar}
          authorName={featuredPost.authorName}  
          authorJob={featuredPost.authorJob}
        />
      </div>
    </article>
  );
}
