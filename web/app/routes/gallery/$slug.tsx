import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/shared/Footer";
import Header from "~/components/shared/Header";
import { getMember } from "~/members";
import BioTitle from "~/components/shared/BioTitle";
import Grid from "~/components/gallery/Grid";

export const loader = ({ params }: { params: any }) => getMember(params.slug);

const Gallery = () => {
  const member = useLoaderData();
  const {
    galleryPhotos,
    name,
    life,
    slug,
  } = member;


  return (
    <>
      <Header />
      <main className="mx-4 my-12 max-w-screen-2xl sm:mx-auto">
        <BioTitle name={name} life={life} />
        <Link to={`/profile/${slug}`} className="text-lg text-blue-600 underline hover:text-blue-500">
          Back to Profile
        </Link>
        <p className="font-bold text-lg">Want to add an image? Email it to <span className="text-lg text-blue-600 underline hover:text-blue-500">ptumulty923@gmail.com</span></p>
        <p className="font-bold text-lg" >Is the picture too small? <span className="font-normal">click on the image to make it bigger</span></p>
      
        <Grid gallery={galleryPhotos} />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
