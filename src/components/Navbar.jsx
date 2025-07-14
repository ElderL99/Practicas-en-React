import logo from "../assets/falcon.png"
export default function Navbar() {

    return (
        <div className="flex items-center p-5 justify-evenly">

            <div className=" justify-start">


                <img src={logo} title="logo" width={90} height={90} />
            </div>

            <div className="items-center">
                 <h2 className="text 3x2 font-bold text-yellow-300">More Information here.</h2>
            </div>

            
        </div>
    )
}