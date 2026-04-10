import { useState } from "react";
import { InstallAppsContex } from "./InstallAppsContex";



const InstalledAppsContex = ({children}) => {
    const[installed, setInstalled] = useState([]);

const data = {
    installed,
    setInstalled,
}

    return ( <InstallAppsContex.Provider value={data}>{children}</InstallAppsContex.Provider>
        
    );
};

export default InstalledAppsContex;