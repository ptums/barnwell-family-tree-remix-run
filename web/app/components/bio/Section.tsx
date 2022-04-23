interface Props {
  title: string;
  children: string | string[];
}
const Section = ({ title, children }: Props) => (
  <div className="flex flex-col my-6">
  <p className="text-2xl font-bold mb-2">{title}</p>
   {(typeof children === "string") && <p className="text-xl">{children}</p>}
   {(typeof children === "object") && children.map((child:string) => <p key={child} className="text-xl">{child}</p>)}
  </div>
);

export default Section;