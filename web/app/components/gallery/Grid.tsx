import { SRLWrapper } from 'simple-react-lightbox'
import { IMAGE_BASE_URL } from '~/utils/constants';
interface Props {
  gallery:{
    alt: string;
    url: string;
  }[];
}
const Grid = ({ gallery }: Props) => {

  console.log(gallery)
  const options = {
    caption: {
      showCaption: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    buttons: {
      showAutoplayButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
  }
  return (
    <SRLWrapper options={options}>
      <div className="px-4 py-4 sm:py-16 sm:pr-4 sm:pl-20">
        <div
          className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mt-12"
        
        >
          {gallery.map(({ alt, url }) => (
            <img
             src={`${IMAGE_BASE_URL}${url}`}
             alt={alt}
             key={alt}
             />
          ))}
        </div>
      </div>
    </SRLWrapper>
  )
};

export default Grid;