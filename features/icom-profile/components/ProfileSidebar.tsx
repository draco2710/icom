import { ActionButton } from "@/shared/types";
import { IComProfile } from "../types";

interface ProfileSidebarProps {
    profile: IComProfile;
}

export default function ProfileSidebar({ profile }: ProfileSidebarProps) {
    return (
        <aside className="w-full md:w-80 shrink-0 md:sticky md:top-28 h-fit">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div
                    className="size-24 md:size-32 rounded-3xl bg-cover bg-center shadow-soft mb-4 border-2 border-white dark:border-gray-700 ring-1 ring-gray-100 dark:ring-gray-800"
                    style={{ backgroundImage: `url('${profile.logo || "https://placehold.co/100"}')` }}
                ></div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary-light dark:text-text-primary-dark">
                    {profile.name}
                </h2>
                {profile.description && (
                    <p className="text-sm md:text-base text-text-secondary-light dark:text-text-secondary-dark mt-2 line-clamp-4 md:line-clamp-none">
                        {profile.description}
                    </p>
                )}

                {/* Basic Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-card-dark px-3 py-1.5 rounded-full">
                        <span className="material-symbols-outlined text-lg">group</span>
                        <span>{profile.total_members || 0} Members</span>
                    </div>
                    {profile.created && (
                        <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-card-dark px-3 py-1.5 rounded-full">
                            <span className="material-symbols-outlined text-lg">calendar_month</span>
                            <span>Est. {new Date(profile.created).getFullYear()}</span>
                        </div>
                    )}
                </div>

                {/* Action Buttons (External Links) */}
                {profile.actions && profile.actions.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 w-full">
                        {profile.actions.map((action: ActionButton) => (
                            <a
                                key={action.action_id}
                                href={action.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl text-sm font-bold hover:bg-primary/20 transition-all flex-1 md:flex-none border border-primary/10"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                {action.icon && <img src={action.icon} alt="" className="w-5 h-5 object-contain" />}
                                {action.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}
