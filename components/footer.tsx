export default function Footer() {
    return(
        <footer className="border-t border-w">
            <div className="max-w-5xl mx-auto px-5 py-5 border-x border-white grid place-items-center">
                <div className="flex flex-col gap-3 text-center">
                    <div className="font-bold text-2xl">
                        TalkWave
                    </div>
                    <span className="text-gray-400 text-sm">
                        &copy; 2023 All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}