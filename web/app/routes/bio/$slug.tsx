import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/shared/Footer";
import Header from "~/components/shared/Header";
import Section from "~/components/bio/Section";
import { getMember } from "~/members";
import BioTitle from "~/components/shared/BioTitle";
import { IMAGE_BASE_URL } from "~/utils/constants";

export const loader = ({ params }: { params: any }) => getMember(params.slug);

const Bio = () => {
  const member = useLoaderData();
  const {
    born,
    comments,
    education,
    death,
    profileImage,
    workHistory,
    family,
    name,
    life,
    slug,
  } = member;


  return (
    <>
      <Header />
      <main className="mx-4 my-12 max-w-screen-2xl sm:mx-auto">
        <BioTitle name={name} life={life} />
        {profileImage && (
          <img 
          src={`${IMAGE_BASE_URL}${profileImage}`}
          className="mx-auto my-4"
          alt={name}
        />
        )}
        <br/>
        <Section title="Born" children={born} />
        <Section title="Death" children={death} />
        <Section title="Education" children={education} />
        <Section title="Work History" children={workHistory} />
        <Section title="Family" children={family} />
        <div className="flex flex-col my-6">
          <p className="text-2xl font-bold mb-2">Photo Gallery</p>
          <Link to={`/gallery/${slug}`} className="text-blue-500 hover:text-blue-600 underline">
            {name}'s Photo Gallery
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bio;
