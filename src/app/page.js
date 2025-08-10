import Image from "next/image";

export default function Home() {
  const SAMPLE = [
    {
      id: 1,
      title: "Mountain Views",
      author: "Jane Doe",
      src: "https://picsum.photos/seed/mountain/800/600",
    },
    {
      id: 2,
      title: "Nature Walk",
      author: "John Smith",
      src: "https://picsum.photos/seed/forest/800/600",
    },
    {
      id: 3,
      title: "Ocean Vibes",
      author: "Alex Johnson",
      src: "https://picsum.photos/seed/ocean/800/600",
    },
    {
      id: 4,
      title: "Foggy Forest",
      author: "Emily Davis",
      src: "https://picsum.photos/seed/fog/800/600",
    },
  ];

  return (
    <main className="container">
      <div className="grid">
        {SAMPLE.map((item) => (
          <article key={item.id} className="card">
            <Image
              src={item.src}
              alt={item.title}
              width={800}
              height={600}
              style={{ objectFit: "cover" }}
            />
            <div className="meta">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 20 }}>
                    {item.title}
                  </div>
                  <div className="small">{item.author}</div>
                </div>
                <div>
                  <button className="btn" style={{ padding: "8px 12px" }}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
