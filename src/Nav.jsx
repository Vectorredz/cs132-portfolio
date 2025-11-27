import "../src/styles/app.css"

function Nav({onScrollToDatasets, onScrollToOverview, onScrollToAboutUs, onScrollToMethod}) {
    return (
    <>
  <nav className="flex flex-row justify-center fixed w-full z-10 bg-white shadow-lg/10">
  <div className="navbar flex gap-6 p-4 font-black font-space-grotesk text-lg">
    <img src="sdg.png" className="h-15" alt="SDG logo" />
    <img src="logo.png" className="h-15" alt="Site logo" />
    <button onClick={onScrollToOverview} className="navitem">Overview</button>
    <button onClick={onScrollToDatasets} className="navitem">Data Collection</button>
    <button onClick={onScrollToMethod} className="navitem">Data Analysis</button>
    <button className="navitem">ML Modelling</button>
    <button onClick={onScrollToAboutUs} className="navitem">About Us</button>
  </div>
</nav>

    </>
    )
}

export default Nav;