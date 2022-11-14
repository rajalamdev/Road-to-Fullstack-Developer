import Image from "next/image"

export default function InfoPosts(props) {

  return (
    <>
        <div className="flex gap-4 text-white/50 text-sm my-4">
          <div>{props.category}</div>
          <div>&#9679;</div>
          <div>{props.date}</div>
        </div>
        <h1 className="text-2xl mb-4">{props.title}</h1>
        <p className="text-white/50 mb-4">{props.headline}</p>
        <div className="flex gap-4 items-center text-sm">
          <Image src={props.authorAvatar} width={50} height={50} alt="avatar"/>
          <div>
            <h2>{props.authorName}</h2>
            <p className="text-white/50 text-[12px]">
              {props.authorJob}
            </p>
          </div>
        </div>
    </>
  )
}
