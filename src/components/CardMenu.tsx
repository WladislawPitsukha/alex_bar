import Image from "next/image";

interface Product {
    id: number;
    name: string;
    price: number;
    info: {
        description: string;
        components: {
            text: string;
            amount: number;
        }[];
        photos: any[];
    };
}

export default function CardMenu(product: Product) {
    const { id, name, price, info } = product;
    const { description, components, photos } = info;

    return (
        <div
            key={id}
            className="group relative cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-br from-pink-500/0 via-yellow-400/0 to-green-300/0 group-hover:from-pink-500/5 group-hover:to-green-300/5 transition-all duration-300" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-3 gap-3">
                    <h3 className="text-lg font-bold text-white flex-1">
                        {name}
                    </h3>
                    <span className="bg-linear-to-r from-pink-500 via-yellow-400 to-green-300 text-black px-4 py-1 rounded-full font-extrabold text-lg whitespace-nowrap">
                        ${price}
                    </span>
                </div>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                {photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {photos.slice(0, 3).map((photo, idx) => (
                            <div
                                key={idx}
                                className="relative cursor-pointer rounded-lg overflow-hidden border border-white/10 aspect-square group/img"
                            >
                                <Image
                                    src={photo}
                                    alt={`${description} ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover/img:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {components.length > 0 && (
                    <div className="border-t border-white/10 pt-3">
                        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-2">
                            Ingredients
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {components.map((comp, index) => (
                                <span
                                    key={index}
                                    className="cursor-pointer text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/5 hover:bg-white/20 transition-colors"
                                >
                                    {comp.text}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}