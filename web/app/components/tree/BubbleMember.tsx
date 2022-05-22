import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { modifyRelationship, bubbleStyle } from '~/utils/core';
import { Member } from './types';

const MemberBubble = ({ member, setPosition } : { member: Member, setPosition: any}) => {

  const trackPos = (data: any, id: string) => {
    setPosition({ x: data.x, y: data.y, id });
 };
  return (
    <Draggable onDrag={(e, data) => trackPos(data, member?.id)}>
    <div className={bubbleStyle(member?.relationship)}>

        <a href={`/profile/${member?.id}`} className="w-12 h-16 mr-4 mb-2 overflow-hidden">
          {member?.profileImage ? (
            <img 
            src={member?.profileImage?.url}
            alt={member?.name}
            className="object-contain h-16"
            />
          ) : (
            <span className="bg-gray-100 w-12 text-xs flex flex-col justify-center text-center h-16  text-black">
               No Image
            </span>
          )}
        </a>
        <div className="flex flex-col text-xs text-center">
          <p><strong>{member?.name}</strong></p>
          
          <p>{modifyRelationship(member?.relationship)}</p>
          <p>
            
             
            
          </p>
        </div>
        
    </div>
    </Draggable>
  )
};

export default MemberBubble;