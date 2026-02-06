import Navbar from "@/helperComponents/Navbar";
import HeroPage from "@/pages/HeroPage";
import Footer from "./helperComponents/Footer";

const App = () => {
	return (
	<div className=" min-h-screen">
		<Navbar/>
		<HeroPage/>
		<Footer/>
	</div>
	);
};

export default App;
