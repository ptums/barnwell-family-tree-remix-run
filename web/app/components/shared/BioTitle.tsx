interface Props {
  name: string;
  life: string;
};

const BioTitle = ({name, life}: Props) => (
  <>
  <h3 className="text-center text-3xl font-bold">{name}</h3>
        <div className="mt-4 mb-8 text-center text-sm">{life}</div>
  </>
);

export default BioTitle;