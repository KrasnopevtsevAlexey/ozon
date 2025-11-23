import Link from "next/link";
import Filter from "./Filter";
import Search from "./Search";
import CartBtn from "./CartBtn";

export default function Header(){
    return(
        <>
         	<header>
		<nav>
		  <div className="container">
			<div className="row">
			  <div className="col">
				<div className="navbar-wrapper d-flex justify-content-between align-items-center">
				  <Link className="logo" href="/"></Link>

				  <div className="d-flex control-wrapper">
					<Filter />
					<Search />
				  </div>

				  <CartBtn />
				</div>
			  </div>
			</div>
		  </div>
		</nav>
	  </header>
        </>
    )
}