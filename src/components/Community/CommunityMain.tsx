'use client';

import SearchBar from "../SearchBar/SearchBar";
import CommunityCategory from "./CommunityCategory";
import CommunityJoined from "./CommunityJoined";
import CommunityList from "./CommunityList";
import CommunityUpper from "./CommunityUpper";


function CommunityMain() {
  return (
    <div className="flex flex-col items-center">
      <CommunityUpper />
      <CommunityJoined />
      <CommunityCategory />
      <CommunityList />
    </div>
  );
}

export default CommunityMain;