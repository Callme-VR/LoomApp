
"use client"
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
    id: string;
    title: string;
    thumbnail: string;
    userImg: string;
    username: string;
    createdAt: string;
    views: string;
    visibility: string;
    duration: number;
}

export default function VideoCard({
    id,
    title,
    thumbnail,
    createdAt,
    views,
    visibility,
    username,
    duration,
    userImg
}: VideoCardProps) {
    return (
        <Link href={`/video/${id}`} className="video-card">
            <Image className="thumbnail" alt="logo" src={thumbnail} width={290} height={160}/>
            <article>
                <div>
                    <figure>
                        <Image src={userImg} alt="profile" width={33} height={33} className="rounded-full aspect-square"/>
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                    </figure>
                    <aside>
                        <Image src={"/assets/icons/eye.svg"} alt="eye" width={16} height={16} />
                        <span>{views}</span>
                    </aside>
                </div>
                <h2>
                    {title}-{" "}{new Date(createdAt).toLocaleDateString('en-us',{
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })}
                </h2>
            </article>
            <button onClick={()=>{}} className="copy-btn">
                <Image  src={"assets/icons/link.svg"} alt="copy" width={17} height={17}/>
                {
                    duration &&(
                        <div className="duration">
                            {Math.ceil(duration/60)}min
                        </div>
                    )
                }
                            
            </button>
        </Link>
    )
}
