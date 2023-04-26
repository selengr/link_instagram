import Image from "next/image";

const page = () => {
    return (
        <div>
             <Image
                src={"/images/loading/Loading-own.gif"}
                alt="Picture of the author"
                width={1500}
                height={1000}
             />
        </div>
    );
}

export default page;