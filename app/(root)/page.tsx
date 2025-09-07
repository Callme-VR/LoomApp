
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

export default function Home() {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <div className="welcome-message">Welcome</div>
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
    </main>
  );
}
