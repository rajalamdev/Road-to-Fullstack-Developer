import InfoPosts from "../components/InfoPosts";
import Layout from "../components/Layout";
import Image from "next/image";
import { formatDate } from "../utility/formatDate"
import ReactMarkdown from "react-markdown"

export async function getServerSideProps({params: {slug}}){
  const reqInfoPost = await fetch(process.env.apiUrl + `/api/posts?populate=*&filters[slug][$eq]=${slug}`)
  const resInfoPost = await reqInfoPost.json()

  if (resInfoPost.data.length == 0) return {notFound: true}

  return {
    props: {
      detailPost: resInfoPost.data[0].attributes
    }
  }
}

export default function detail({detailPost}) {
  return (
    <Layout>
      <div className="text-center flex flex-col items-center max-w-[525px] mx-auto">
        <InfoPosts
          category={detailPost.category}
          date={formatDate(detailPost.publishedAt)}
          title={detailPost.title}
          authorAvatar={process.env.apiUrl + detailPost.authorAvatar.data[0].attributes.url}
          authorName={detailPost.authorName}
          authorJob={detailPost.authorJob}
        />
      </div>
      <div className="relative w-10/12 mx-auto m-8">
        <Image
          src={process.env.apiUrl + detailPost.thumbnail.data.attributes.url}
          width={3}
          height={2}
          layout="responsive"
        />
      </div>
      <div className="w-8/12 mx-auto">
        <h3 className="text-lg mb-6">
          Male sixth sea it a. Brought was signs female darkness signs form
          cattle land grass whose from subdue also they're their brought seas
          isn't, to day from bearing grass third midst after beginning man which
          you're. Dry, gathering beginning given made them evening.
        </h3>
        <div className="space-y-10 text-white/50">
            <ReactMarkdown className="prose max-w-none prose-p:text-white/50 prose-li:text-white/50 prose-ol:text-white/50">
                {detailPost.content}
            </ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}
