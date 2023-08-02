import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const links = [
    { name: 'Home', path: '/' },
    { name: 'Episodes', path: '/episodes' },
    // { name: 'About', path: '/about' },
]

const HamburgerIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
        </svg>
    );
}

const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const isActiveLink = (link: any) => {
        const isEpisodesPage = router.pathname.startsWith('/episodes/');
        return router.asPath === link.path || (isEpisodesPage && link.name === "Episodes");
    }

    return (
        <header className="border-b border-white">
            <div className="max-w-5xl mx-auto flex justify-between border-x border-white py-5 px-5">
                <div className="font-bold flex items-center gap-3">
                    <span className="bg-blue-600 w-6 h-6 inline-block"></span>
                    TalkSquare
                </div>
                <div className="hidden md:block">
                    <nav>
                        <ul className="flex gap-3">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                >
                                    <Link
                                        className={`${isActiveLink(link) ? 'text-white' : 'text-gray-400'} text-gray-400 hover:text-white font-bold`}
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <button className="inline-flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}

                </button>
            </div>
            {isOpen && (
                <nav>
                    <ul className="flex items-center flex-col border-x border-white gap-3 py-3">
                        {links.map((link, index) => (
                            <li
                                key={index}
                            >
                                <Link
                                    className={`${isActiveLink(link) ? 'text-white' : 'text-gray-400'} text-gray-400 hover:text-white font-bold`}
                                    href={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}