import TopBar from '@/component/TopBar/TopBar';
import Workspace from '@/component/WorkSpace/Workspace';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return (
        <div>
            <TopBar problemPage/>
            <Workspace/>
        </div>
    )
}
export default ProblemPage;