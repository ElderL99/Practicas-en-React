
export default function Searchbar({ value, onChange , className,}) {

    return (

        <>
            <nav className="relative w-full max-w-xl mx-auto custom-border">
                <input
                    type="text"
                    placeholder="Buscar personaje"
                    value={value}
                    onChange={onChange}
                    className="rgb-input w-full max-w-xl mx-auto  "
                />
            </nav>
        </>

    )
}