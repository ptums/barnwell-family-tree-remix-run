import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/shared/Footer";
import Header from "~/components/shared/Header";
import { getMember } from "~/members";

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
    parents,
    siblings,
    spouse,
    children,
    generation,
    slug,
  } = member;

  console.log({ member });

  return (
    <>
      <Header />
      <main className="mx-4 my-12 max-w-screen-2xl sm:mx-auto">
        <h3 className="text-center text-3xl font-bold">{name}</h3>
        <div className="mt-4 mb-8 text-center text-sm">{life}</div>
        <img 
          src={`https://res.cloudinary.com/tumulty-web-services${profileImage}`}
          className="mx-auto my-4"
          alt={name}
        />
      </main>
      <Footer />
    </>
  );
};

export default Bio;
