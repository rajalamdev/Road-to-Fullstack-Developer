import Image from "next/image";
import { useState } from "react";
import InfoPosts from "./InfoPosts";
import { formatDate } from "../utility/formatDate"

export default function CardPosts(props) {

  return (
    <>
        <div className="relative">
            <Image src={process.env.apiUrl + props.thumbnail.data.attributes.url} width={3} height={2} layout="responsive" alt="thumbnail" />
        </div>
        <InfoPosts  
          category = {props.category}
          date = {formatDate(props.publishedAt)}
          title = {props.title}
          headline = {props.headline}
          authorAvatar = {process.env.apiUrl + props.authorAvatar.data[0].attributes.url}
          authorName = {props.authorName}
          authorJob = {props.authorJob}
          slug = {props.slug}
        />
    </>
  )
}
