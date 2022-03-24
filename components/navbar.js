function Navbar() {
    return <div>
        <div className="navbar bg-base-100 shadow-lg py-5">
            <div className="navbar-start" />

            <div className="navbar-center text-black">
                <a className="normal-case text-2xl font-black">TCG Marketplace</a>
            </div>
            <div className="navbar-end" />
        </div>

        <div className="flex flex-col items-center relative bottom-5">
            <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" className="h-8 -rotate-6 z-10" />
            <img src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" className="w-16 h-16 rotate-[15deg] p-3 rounded-full bg-white relative bottom-5 shadow" />
        </div>
    </div>
}

export default Navbar