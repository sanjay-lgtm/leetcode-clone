import React from 'react';
import Split from "react-split";
import Playground from './Playground/Playground';
import Problemdescription from './ProblemDescription/Problemdescription';
import { Problem } from '@/utils/types/problem';
type WorkspaceProps = {
    problem: Problem;
};

const Workspace:React.FC<WorkspaceProps> = ({ problem }) => {
    
    return <Split className="split">
        <Problemdescription problem={problem} />
       <Playground/>
    </Split>;
}
export default Workspace;