

function Header() {
    return (
        <div className="w-full h-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold py-5 pl-10 text-base-content">In The Loop</h1>
            <div className="dropdown mr-10">
                <div tabIndex={0} role="button" className="btn m-1">
                    Theme
                    <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-32 p-2 shadow-2xl">
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Light"
                        value="light"
                        data-set-theme="light"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Dark"
                        value="dark"
                        data-set-theme="dark"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Night"
                        value="night"
                        data-set-theme="night"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Retro"
                        value="retro"
                        data-set-theme="retro"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Cyberpunk"
                        value="cyberpunk"
                        data-set-theme="cyberpunk"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Valentine"
                        value="valentine"
                        data-set-theme="valentine"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                    <li>
                    <input
                        type="radio"
                        name="theme-dropdown"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="Aqua"
                        value="aqua"
                        data-set-theme="aqua"
                        data-act-class="ACTIVECLASS"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header