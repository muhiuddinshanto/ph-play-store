import React from 'react';
import { useParams } from 'react-router';
import UseApps from '../../Hooks/UseApps';
import AppsSinglePage from '../Apps/AppsSinglePage';

const AppsDetails = () => {
    const {id} = useParams()
    console.log(id);
    const {apps, loading} = UseApps();
    console.log(apps, loading, 'obj');
    const expectedApp = apps.find(app=> app.id==id)
    
    
    
    return (
        <div>
            <AppsSinglePage expectedApp={expectedApp} loading={loading}></AppsSinglePage>
        </div>
    );
};

export default AppsDetails;