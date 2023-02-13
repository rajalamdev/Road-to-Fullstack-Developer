import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import Router from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function Navbar({currentUser}) {
  return (
    <div className="flex z-40 justify-center w-full items-center border-t border-border-primary fixed bottom-0 left-0 right-0 bg-bg-primary gap-10 py-4">
      <Link href="/">
        <FontAwesomeIcon icon={faHome} size="lg" />
      </Link>
      <Link href="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </Link>
      <Link href="/posts/create">
        <FontAwesomeIcon icon={faSquarePlus} size="lg" />
      </Link>
      <Link href="/[profile]" as={`/${currentUser.username}`}>
        <div className="relative w-[30px] h-[30px] overflow-hidden rounded-full">
          <Image alt="user" src={currentUser.image ? currentUser.image.url : "/profile-default.png"} fill sizes="" />
        </div>
        {/* <FontAwesomeIcon icon={faUser} size="lg" /> */}
      </Link>
    </div>
  )
}
