import React from 'react';
import Split from "react-split";
import Playground from './Playground/Playground';
import Problemdescription from './ProblemDescription/Problemdescription';
type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split className="split">
        <Problemdescription/>
       <Playground/>
    </Split>;
}
export default Workspace;