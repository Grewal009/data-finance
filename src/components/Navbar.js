
const Navbar = () => {
    return(
        <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]"> REACT.</h1>
            <ul className="flex justify-between">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;