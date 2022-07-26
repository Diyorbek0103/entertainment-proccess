import React from 'react';
import {img_300, unavailable} from "../../config/config";
import './SingleContent.css';
import Badge from "@mui/material/Badge";
import {useHistory} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SingleContent({id, poster, title, date, media_type, vote_average}) {

    const history = useHistory();

    return (
        <div>

            <div className="media" onClick={() => history.push(`info/${media_type}/${id}`, {replace: true})}>
                <>
                    <Badge
                        badgeContent={vote_average}
                        
                        color={vote_average > 6 ? 'primary' : 'secondary'}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'top',
                        }}
                    />

                    <LazyLoadImage
                        effect="blur"
                        className="poster"
                        src={poster ? `${img_300}/${poster}` : unavailable}
                        alt={title}/>

                    <b className="title">{title}</b>

                    <span className="subTitle">
                        <div className="category">
                          {
                              media_type === "tv" ? "TV Series" : "Movie"
                          }
                        </div>
                        <div className="date">{date}</div>
                    </span>

                </>
            </div>

        </div>

    );
}

export default SingleContent;