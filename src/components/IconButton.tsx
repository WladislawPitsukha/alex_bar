export default function IconButton({
    onClick,
    children,
    aria,
}: {
    onClick?: () => void;
    children: React.ReactNode;
    aria?: string;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={aria}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center shadow-md"
        >
            {children}
        </button>
    );
}