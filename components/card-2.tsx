import Image from "next/image";
import Link from "next/link";

type Card2Props = {
  href: string;
  logo: string;   // path ke /public
  alt: string;
  title: string;
  width?: number;
  height?: number;
};

export default function Card2({
  href,
  logo,
  alt,
  title,
  width = 100,
  height = 100,
}: Card2Props) {
  return (
    <Link
      href={href}
      className="bg-white text-gray-800 rounded-2xl shadow-md flex flex-col items-center justify-center p-6 hover:shadow-lg transition"
    >
      {/* Fixed logo container */}
      <div className="h-20 flex items-center justify-center mb-4">
        <Image
          src={logo}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>

      {/* Title tetap rapih */}
      <p className="underline text-sm text-center">{title}</p>
    </Link>
  );
}
