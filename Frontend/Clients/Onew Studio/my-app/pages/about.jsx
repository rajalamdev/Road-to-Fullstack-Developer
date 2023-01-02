import Image from "next/image";


export default function About() {
  return (
    <div className="pt-20 pb-32 md:pt-40 flex gap-6 flex-col sm:flex-row px-2">
      <div className="flex-1 pt-10">
        <h1 className="text-header-secondary text-2xl md:text-3xl font-bold pb-2">About <span className="text-header-primary">Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias rerum numquam voluptatibus? Perspiciatis iure culpa voluptatibus assumenda repudiandae eum cumque illo, exercitationem error nobis laudantium facilis maiores quasi. Autem.</p>
      </div>
      <div className="flex-1">
        <Image src="/about.png" width={100} height={100} layout="responsive" />
      </div>
    </div>
  )
}
