export default function SideBar({ onMenuClick}) {
    return (
        <div className="bg-transparent mx-auto w-full h-full p-5">

            <div className="">
                <p className="purple-glow-input text-lg text-center mb-4">APIs </p>
                <hr />
                <div className="p-4">
                    <ul id='list' className="text-green-800 text-center ">
                        <li className="  hover:list-disc hover:text-violet-400 hover:cursor-pointer"  onClick={()=>{onMenuClick('rick')}} >Rick & Morty</li>
                        <li className="  hover:list-disc hover:text-violet-400 hover:cursor-pointer" onClick={()=>{onMenuClick('pokemon')}}>Pokemon</li>
                    </ul>
                </div>
            </div>

            <div className="footer">
               
            </div>

        </div>
    );
}