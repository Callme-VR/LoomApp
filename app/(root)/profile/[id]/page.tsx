import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

export default function profilepage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div className="wrapper-page">
            <Header subHeader="vishal@gmail.com" title="vishal|A web programmers" userImg="/assets/images/dummy.jpg" />
            <section className="video-grid">
                {
                    dummyCards.map((card) => (
                        <VideoCard
                            key={card.id}
                            {...card}
                            createdAt={card.createdAt.toISOString()}
                            views={card.views.toString()}
                        />
                    ))
                }
            </section>
        </div>
    )
}

