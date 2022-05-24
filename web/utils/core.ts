import { Member } from "types/Member";

export const formatMembers = (members, memberPositions) => {

  const results: Member[] = members?.map(member => ({...memberPositions.find(pos => pos?.memberId === member?.id), ...member }))

  return results;
}


export const modifyRelationship = (relationship: string) => {
  let results = ""
  switch (relationship) {
    case "parent":
      results = "Parent";
      break;
    case "grandparent":
      results = "Grandparent";
      break;
    case "great-grandparent":
      results = "Great Grandparent";
      break;
    case "great-great-grandparent":
      results = "2nd Great Grandparent";
      break;
    case "great-great-great-grandparent":
      results = "3rd Great Grandparent";
      break;
    default:
      results = "";
      break;
  }

  return results;
}
