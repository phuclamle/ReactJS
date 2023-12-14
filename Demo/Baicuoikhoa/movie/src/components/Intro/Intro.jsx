import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { GoMute } from "react-icons/go";
import { VscUnmute } from "react-icons/vsc";
function Intro(){
    const [isMuted,setIsMuted] = useState(true)
    return(
        <div className="container-fluid bg-body-secondary intro">
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height='100%'
                volume={1}
                muted={isMuted}
                url='https://vimeo.com/338898610'
                className="videoIntro"
            />
            
            <div className="InfoIntro d-flex flex-column">
                <h1>S Cinema</h1>
                <h3>Bring every movie to your home</h3>
            </div>
                {
                    isMuted ? (
                    <GoMute className="btnVolume" color="white" z={20} onClick={()=>setIsMuted(!isMuted)} />
                    ):(
                        <VscUnmute className="btnVolume" color="white" z={20} onClick={()=>setIsMuted(!isMuted)} />
                    )
                }
            <div className="fadeBottom"></div>
        </div>

    )
}

export default Intro