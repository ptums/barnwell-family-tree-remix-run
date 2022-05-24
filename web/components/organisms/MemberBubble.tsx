import React from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';
import { Member } from 'types/Member';
import { modifyRelationship } from 'utils/core';
import { trpc } from "utils/trpc";
import noImg from "public/images/image-not-found.png";

const MemberBubble = ({ member }: { member: Member}) => {
  const mutation = trpc.useMutation(['position']);

  const savePosition = async (memberId, coordinateX,coordinateY) => {
      mutation.mutate({ memberId, coordinateX, coordinateY });
  };

  if(mutation) {
    console.log(mutation?.data)
  } 

  console.log(member.relationship)
  return (
    <Draggable
      onStop={(_, data) => {
        savePosition(member?.id, data?.x, data?.y)
      }}
      defaultPosition={{ x:  member?.coordinateX || 0, y: member?.coordinateY || 0 }}
    >
      <div className="absolute">
        <div
          className="hover:cursor-pointer rounded-xl shadow-lg px-3 py-2 text-white flex flex-row flex-wrap bg-black bg-opacity-50"
          style={{ minWidth: 300 }}
        >
   
              {(member.relationship === 'parent' || member?.relationship === 'grandparent' || member?.relationship === 'great-grandparent') && (
                     <div 
                     className="mr-2 relative flex flex-col items-center justify-center"
                     style={{
                       width: 20,
                       height: 35
                     }}
                     >
                {member?.profileImage ? (
                <Image 
                  src={member?.profileImage?.url}
                  alt={member?.name}
                  objectFit="contain"
                  layout="fill"
                />
              ) : (
                <Image
                  src={noImg}
                  alt="no image found"
                  objectFit="contain"
                  layout="fill"
                />
              )}
               </div>
              )}
            
            <div className="flex flex-col text-xs">
                 <p><strong>{member?.name}</strong> - {modifyRelationship(member?.relationship)}</p>
                <button className="text-left hover:cursor-pointer hover:underline">View</button>
            </div>
        </div>
      </div>        
    </Draggable>
  );
};

export default MemberBubble;