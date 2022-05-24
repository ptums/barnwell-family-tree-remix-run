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
  return (
    <Draggable
      onStop={(_, data) => {
        savePosition(member?.id, data?.x, data?.y)
      }}
      defaultPosition={{ x:  member?.coordinateX || 0, y: member?.coordinateY || 0 }}
    >
      <div className="absolute">
        <div
          className="hover:cursor-pointer rounded-xl shadow-lg px-3 py-2 text-white flex flex-row flex-wrap w-64 bg-black bg-opacity-50"
        >
        <div 
          className="mr-4 relative flex flex-col items-center justify-center"
          style={{
            width: 40,
            height: 55
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
            <div className="flex flex-col text-sm">
              <p><strong>{member?.name}</strong></p>
              <p>{modifyRelationship(member?.relationship)}</p>
              <button className="text-left hover:cursor-pointer hover:underline">View</button>
            </div>
        </div>
      </div>        
    </Draggable>
  );
};

export default MemberBubble;