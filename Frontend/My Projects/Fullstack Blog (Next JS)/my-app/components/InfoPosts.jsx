import Image from "next/image"

export default function InfoPosts(
    {category, date, title, desc, authorAvatar, authorName, authorJob}
) {
  return (
    <>
        <div className="flex gap-4 text-white/50 text-sm my-4">
          <div>{category}</div>
          <div>&#9679;</div>
          <div>{date}</div>
        </div>
        <h1 className="text-2xl mb-4">{title}</h1>
        <p className="text-white/50 mb-4">{desc}</p>
        <div className="flex gap-4 items-center text-sm">
          <Image src={authorAvatar} width={50} height={50} />
          <div>
            <h2>{authorName}</h2>
            <p className="text-white/50 text-[12px]">
              {authorJob}
            </p>
          </div>
        </div>
    </>
  )
}
