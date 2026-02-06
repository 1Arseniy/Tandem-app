import { Link } from "react-router";

function Header() {
	return (
		<header className="flex justify-between items-center gap-5 pt-2.5 pb-2.5 pr-4 pl-4">
			<Link to="/" className="font-semibold">
				Ai Assistent
			</Link>

			<div>
				<Link className="hover:underline mr-5" to="/sign-in">
					Sign In
				</Link>
				<Link className="hover:underline" to="/sign-up">
					Sign Up
				</Link>
			</div>
		</header>
	);
}

export default Header;
