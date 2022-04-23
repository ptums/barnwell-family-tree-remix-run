import { useLoaderData } from "@remix-run/react";
import { getMembers } from "~/members";
import Header from "~/components/shared/Header";
import MemberRow from "~/components/home/MemberRow";
import { findMembersByGeneration } from "~/utils/core";
import Footer from "~/components/shared/Footer";

export const loader = () => getMembers();

export default function Index() {
  const members = useLoaderData();
  const children = findMembersByGeneration(members, "children");
  const parents = findMembersByGeneration(members, "parents");
  const grandParents = findMembersByGeneration(members, "grand-parents");
  const greatGrandParents = findMembersByGeneration(
    members,
    "great-grand-parents"
  );
  const greatGreatGrandParents = findMembersByGeneration(
    members,
    "great-great-parents"
  );

  return (
    <>
      <Header />
      <main className="mx-4 my-12 max-w-screen-2xl sm:mx-auto">
        <MemberRow members={children} generation="Children" color="blue" />
        <MemberRow members={parents} generation="Parents" color="green" />
        <MemberRow
          members={grandParents}
          generation="Grand Parents"
          color="yellow"
        />
        <MemberRow
          members={greatGrandParents}
          generation="Great Grand Parents"
          color="red"
        />
        <MemberRow
          members={greatGreatGrandParents}
          generation="2nd Grand Parents"
          color="purple"
        />
      </main>
      <Footer />
    </>
  );
}
