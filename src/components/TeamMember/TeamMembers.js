// team members data ar shown her from useMembes custom hook
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useMembers from '../../hooks/useMembers';
import SingleMember from './SingleMember';

const TeamMembers = () => {
    const[members]=useMembers();
   
    return (
        <div>
             <h4 className="border border-1 border-dark p-2 mt-3 rounded bg-secondary text-white w-25 mx-auto"><span>Members</span> </h4>
            <Row xs={1} md={2} className="g-4 mt-2">
                {
                    members.map(member=><SingleMember
                    key={member.key}
                    member={member}
                    ></SingleMember>)
                }        
            </Row>
            
        </div>
    );
};

export default TeamMembers;