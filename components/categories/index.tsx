import Link from "next/link";
import Image from "next/image";

export default function Categories() {
    return (
        <div className="mb-10">
            <Link href="/" className="lg:col-span-3 relative group">
                <div className="relative overflow-hidden">
                    <Image
                        src="/home/best-products-side-image/trek.jpg"
                        alt="imagem em destaque"
                        width={500}
                        height={500}
                        className="cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className='absolute inset-0 flex items-center justify-center text-center bottom-0 p-6 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-center lg:bg-white/70 lg:rounded-lg lg:text-black py-2 px-4'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase 
                            text-white lg:text-black'>
                                Pesca
                            </h3>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    );
}
