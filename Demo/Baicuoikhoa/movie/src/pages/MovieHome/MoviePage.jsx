import React from "react";
import MainLayout from "../../layouts/HomeLayout";
import HomeLayout from "../../layouts/HomeLayout";
import Intro from "../../components/Intro/Intro";
import TypeMovie from "../../components/Contents/TypeMovie";
import Menus from "../../components/Menus/Menu";
import Content from "../../components/Contents/Content";
 

function MoviePage(){
    return(
         <HomeLayout>
            <Intro/>
            <Content/>
            <Menus/>
         </HomeLayout>
    )
}

export default MoviePage