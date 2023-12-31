import React from "react";
import CommunityListItem from "./CommunityListItem";
import { Link } from "react-router-dom";
import "../styles/CommunityList.css";

const CommunityList = ({ communitiesData }) => {
	return (
		<div className='community-list'>
			{communitiesData.map((community) => (
				<Link to={`/communities/community/${community.community_id}`} key={community.community_id}>
				<CommunityListItem
					key={community.community_id}
					name={community.name}
					description={community.description}
					location={community.location}
					cause_tag={community.cause}
					created_on={community.creation_date}
					communityPicture={community.picture_url}
				/>
				</Link>
			))}
		</div>
	);
};

export default CommunityList;
