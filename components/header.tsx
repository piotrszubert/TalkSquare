import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    {name: 'Home', path: '/'},
    {name: 'Episodes', path: '/episodes'},
    {name: 'Contact', path: '/contact'},
]

export default function Header() {
    const router = useRouter();
    return(
        <header className="border-b border-white">
            <div className="max-w-5xl mx-auto flex justify-between border-x border-white py-5 px-5">
                <div className="font-bold">
                    TalkSquare
                </div>
                <div>
                    <nav>
                        <ul className="flex gap-3">
                            {links.map((link, index) => (
                                <li
                                    key={index}
                                >
                                    <Link
                                        className={`${router.asPath === link.path ? 'text-white' : 'text-gray-400'} text-gray-400 hover:text-white font-bold`}
                                        href={link.path}    
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}