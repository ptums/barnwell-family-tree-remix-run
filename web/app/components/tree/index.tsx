import React from 'react';
import MemberBubble from './BubbleMember';
import { Member } from './types';
interface Props {
  parents: Member[];
  greatGrandParents: Member [];
  greatGreatGrandParents: Member[];
  greatGreatGreatGrandParents: Member[];
  grandParents: Member[];
  setPosition: ({ x, y, id}: any) => void;
}
const NewHome = ({
  parents,
  greatGrandParents,
  greatGreatGrandParents,
  greatGreatGreatGrandParents,
  grandParents,
  setPosition
}: Props) => {
  return (
    <>
    <header className="py-4 text-center shadow-3xl bg-white">
       <a href="/">
       <h1 className="text-3xl font-bold"> Barnwell Family Tree</h1>
       </a>
    </header>
    <div>
    {parents.map((member) => (
      <MemberBubble setPosition={setPosition} key={member?.name} member={member} />
    ))} 
    {grandParents.map((member) => (
      <MemberBubble setPosition={setPosition} key={member?.name} member={member} />
    ))}  
    {greatGrandParents.map((member) => (
      <MemberBubble setPosition={setPosition} key={member?.name} member={member} />
    ))}  
    {greatGreatGrandParents.map((member) => (
      <MemberBubble setPosition={setPosition} key={member?.name} member={member} />
    ))}  
    {greatGreatGreatGrandParents.map((member) => (
      <MemberBubble setPosition={setPosition} key={member?.name} member={member} />
    ))}
  </div>
    </>
  )
};

export default NewHome;