import Link from "next/link";

interface IComHeaderProps {
    name: string;
}

export default function IComHeader({ name }: IComHeaderProps) {
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                        arrow_back_ios_new
                    </span>
                </Link>
                <h1 className="md:hidden text-base font-bold tracking-tight opacity-100 truncate max-w-[60%]">
                    {name}
                </h1>
                <div className="hidden md:block text-lg font-bold">ICom Profile</div>
                <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                        menu
                    </span>
                </button>
            </div>
        </header>
    );
}
