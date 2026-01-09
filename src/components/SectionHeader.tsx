export default function SectionHeader({ title }: { title: string }) {
    return (
        <header className="w-full max-w-6xl mx-auto px-4 mb-6">
        <h2 className="text-4xl font-bold tracking-wide text-white uppercase text-center">
            {title}
        </h2>
        </header>
    );
}