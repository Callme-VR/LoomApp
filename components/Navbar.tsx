import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    const user = {};
    return (
        <header className="navbar">
            <nav>
                <Link href={"/"}>
                    <Image src={"/assets/icons/logo.svg"} alt="logo" width={32} height={32} />
                    <h1>
                        ManRcder
                    </h1>
                </Link>
                {
                    user && (
                        <figure>
                            <button>
                                <Image className=" rounded-full aspect-square" src={"/assets/images/dummy.jpg"} alt="image" width={36} height={36} />
                            </button>
                            <button className="cursor-pointer">
                                <Image  className="rotate-180"src={"assets/icons/logout.svg"} alt="logo" width={35} height={35} />
                            </button>
                        </figure>
                    )
                }
            </nav>
        </header>
    )
}