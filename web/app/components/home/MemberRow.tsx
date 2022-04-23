import { Link } from "@remix-run/react";

interface Props {
  members: any;
  generation: string;
  color: string;
}

const MemberRow = ({ members, generation, color }: Props) => {
  const defaultStyling =
    "mr-2 mb-3 md:mb-0 shadow-md py-4 px-3 leading-4 rounded text-white text-lg font-bold";
  let buttonStyle = "";
  ({ color });
  switch (color) {
    case "blue":
      buttonStyle = `${defaultStyling} bg-sky-500 hover:bg-sky-400`;
      break;
    case "green":
      buttonStyle = `${defaultStyling} bg-emerald-500 hover:bg-emerald-400`;
      break;
    case "yellow":
      buttonStyle = `${defaultStyling} bg-amber-500 hover:bg-amber-400`;
      break;
    case "red":
      buttonStyle = `${defaultStyling} bg-red-500 hover:bg-red-400`;
      break;
    case "purple":
      buttonStyle = `${defaultStyling} bg-violet-500 hover:bg-violet-400`;
      break;

    default:
      buttonStyle = `${defaultStyling} bg-fuchsia-500 hover:bg-fuchsia-400`;
      break;
  }

  return (
    <div className="mt-12 border-b-2 border-blue-400 pb-24">
      <h3 className="text-center text-3xl font-bold">{generation}</h3>
      <div className="mt-8 flex flex-col justify-center md:flex-row">
        {members.map(
          ({ name, id, slug }: { name: string; id: string; slug: string }) => (
            <button key={id} className={buttonStyle}>
              <Link to={`/bio/${slug}`}>{name}</Link>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MemberRow;
