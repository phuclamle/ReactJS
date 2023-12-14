import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa"
import { FaFire } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

function Menus(props) {
    return (
        <div className="MenusPane">
            <MenuItem to="netflix" name="Home" Icon={FaHome} />
            <MenuItem to="trending" name="Trending" Icon={FaFire} />
            <MenuItem to="topRated" name="Top rated" Icon={FaStar} />
            {/* <MenuItem to="actionMovies" name="Actions Movies" Icon={GiNinjaHeroicStance}/>
        <MenuItem to="comedyMovies" name="Comedy Movies" Icon={MdTheaterComedy} />
        <MenuItem to="horrorMovies" name="Horror Movies" Icon={GiGhost} />
        <MenuItem to="romanceMovies" name="Romance Movies" Icon={GiRomanToga} />
        <MenuItem to="documentaries" name="Documentaries" Icon={GiBandageRoll} />  */}
        </div>
    );
}

export default Menus