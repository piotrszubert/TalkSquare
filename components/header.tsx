export default function Header() {
    return(
        <header className="border-b border-white">
            <div className="max-w-5xl mx-auto flex justify-between border-x border-white py-5 px-5">
                <div className="font-bold">
                    TalkSquare
                </div>
                <div>
                    <nav>
                        <ul className="flex gap-3">
                            <li>
                                Home
                            </li>
                            <li>
                                Episodes
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}