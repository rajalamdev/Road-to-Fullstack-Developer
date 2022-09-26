import InfoPosts from "../components/InfoPosts";
import Layout from "../components/Layout";
import Image from "next/image";

export default function detail() {
  return (
    <Layout>
      <div className="text-center flex flex-col items-center w-[525px] mx-auto">
        <InfoPosts
          category="UI DESIGN"
          date="July 2 2021"
          title="Understanding color theory: the color wheel and finding complementary colors"
          authorAvatar="/author-1.png"
          authorName="Leslie Alexander"
          authorJob="UI Designer"
        />
      </div>
      <div className="relative w-10/12 mx-auto m-8">
        <Image
          src="/thumbnail-1.png"
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
            <p>
            Lights dry. Thing, likeness, forth shall replenish upon abundantly our
            green. Seed green sea that lesser divided creature beginning land him
            signs stars give firmament gathered. Wherein there their morning a he
            grass. Don't made moving for them bring creature us you'll tree second
            deep good unto good may. Us yielding.
            </p>
            <p>
            Have. Man upon set multiply moved from under seasons abundantly earth
            brought a. They're open moved years saw isn't morning darkness. Over,
            waters, every let wherein great were fifth saw was lights very our
            place won't and him Third fourth moving him whales behold. Beast
            second stars lights great was don't green give subdue his. Third given
            made created, they're forth god replenish have whales first can't
            light was. Herb you'll them beast kind divided. Were beginning fly air
            multiply god Yielding sea don't were forth.
            </p>
        </div>
      </div>
    </Layout>
  );
}
