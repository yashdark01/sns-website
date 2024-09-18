import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        heroTrigger: false,
        aboutTrigger: false,
        innovationTrigger: false,
        servicesTrigger: false,
        solutionsTrigger: false,
    });

    const updateTrigger = (section) => {
        setUser(prevUser => ({
            heroTrigger: false,
            aboutTrigger: false,
            innovationTrigger: false,
            servicesTrigger: false,
            solutionsTrigger: false,
            [section]: true,
        }));
    };

    return (
        <UserContext.Provider value={{ user, updateTrigger }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
