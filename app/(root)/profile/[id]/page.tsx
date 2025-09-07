import Header from "@/components/Header";

export default function profilepage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div className="wrapper-page">
            <Header subHeader="vishal@gmail.com" title="vishal|A web programmers" userImg="/assets/images/dummy.jpg" />
            <h1 className="text-2xl font-karla">
                User ID: {id}
            </h1>
        </div>
    )
}

