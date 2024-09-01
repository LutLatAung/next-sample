import Image from "next/image";

export default async function Page({ params }) {
  const dataUrl = `http://localhost:3000/api/car/${params.id}`;
  const car = await fetch(dataUrl).then((response) => response.json());

  return (
    <div>
      Car ID: {params.id}
      <h1>{car.makeName}</h1>
      <Image
        src={car.featuredImage.srcUrl}
        alt={car.makeName}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
