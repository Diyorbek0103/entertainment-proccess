import React, {useEffect} from 'react';
import WhatShotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router-dom';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import "./footer.css";

export default function Footer() {

    const [value, setValue] = React.useState(0);

    const history = useHistory();

    useEffect(()=>{
        if (value === 0) history.push('/');
        else if (value === 1) history.push('/movies');
        else if (value === 2) history.push('/series');
        else if (value === 3) history.push('/search');
    }, [value, history]);

    return (
        <div className="footer">

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                    backgroundColor: "#39445a",
                    ZIndex: 100,
                    height: "70px",
                    boxShadow: "1px 0px 5px black"
                }}
            >


                <BottomNavigationAction
                    label="Trending"
                    icon={<WhatShotIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Movies"
                    icon={<MovieIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Series"
                    icon={<TvIcon/>}
                    style={{color: "white"}}
                />
                <BottomNavigationAction
                    label="Search"
                    icon={<SearchIcon/>}
                    style={{color: "white"}}
                />





            </BottomNavigation>
        </div>
    );
}

