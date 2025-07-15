export default function Footer() {
    return (

        <div className=" w-full grid  justify-center items-center gap-10  ">

            <div className="grid justify-center items-center w-300">
                <div className="flex justify-center items-center text-gray-300 font-semibold"><p>Do you want to learn More?</p> </div>
                <div><h1 className="text-7xl font-bold">Let's Start</h1></div>
            </div>
            <hr className="w-full" />
            <div className="flex justify-between items-center w-250 ">
                <p className="text-purple-500 relative inline-block text-3xl font-medium 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current
               after:w-0 hover:after:w-full after:transition-all after:duration-300">adan.lugo.barrientos@outlook.com</p>
                <p className="relative inline-block text-3xl font-medium text-yellow-500
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current
               after:w-0 hover:after:w-full after:transition-all after:duration-300">+52 7204754565</p>
            </div>

            <div className="flex justify-center items-center" id="svg">
                <div className="animation flex gap-4 items-center text-white ">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/AdanBarrientos0/" target="_blank" rel="noopener noreferrer">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500">
                            <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-pink-500">
                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0c-1.4 0-2.5.2-3.4.5-.9.3-1.6.7-2.3 1.4C.7 2.6.3 3.3 0 4.2.1 5.1 0 6.2 0 7.6c0 1.3 0 1.7.1 4.4 0 2.8 0 3.1.1 4.4.1 1.4.3 2.5.5 3.4.3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.9.3 2 .5 3.4.5 1.3 0 1.7 0 4.4.1 2.8 0 3.1 0 4.4-.1 1.4-.1 2.5-.3 3.4-.5.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.9.5-2 .5-3.4 0-1.3 0-1.7.1-4.4 0-2.8 0-3.1-.1-4.4-.1-1.4-.3-2.5-.5-3.4-.3-.9-.7-1.6-1.4-2.3-.7-.7-1.4-1.1-2.3-1.4C18.5.2 17.4 0 16 0c-1.3 0-1.7 0-4.4-.1z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/ElderL99" target="_blank" rel="noopener noreferrer">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-gray-300">
                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.012-1.23-.017-2.234-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.082-.73.082-.73 1.204.085 1.838 1.24 1.838 1.24 1.07 1.834 2.806 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.004.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.431.372.815 1.104.815 2.227 0 1.606-.014 2.901-.014 3.293 0 .321.217.694.825.576C20.565 21.796 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a href="mailto:adan.lugo.barrientos@outlook.com">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-yellow-400">
                            <path d="M1.5 4.5h21a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 18V6a1.5 1.5 0 011.5-1.5zm1.1 1.5L12 13.25 21.4 6H2.6zm-.6 1.75v10.25h20V7.75l-9.25 7.25a1 1 0 01-1.2 0L2 7.75z" />
                        </svg>
                    </a>

                    {/* Teléfono */}
                    <a href="tel:+527204754565">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-green-400">
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17A1 1 0 014 3h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}