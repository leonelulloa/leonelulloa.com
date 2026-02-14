import { COPY } from "@/config/copy";

interface PostData {
  titleKey: string;
  subKey: string;
  metrics: string[];
}

const POSTS: PostData[] = [
  {
    titleKey: "p1",
    subKey: "p1s",
    metrics: ["\uD83C\uDFAC Shorts", "\u26A1 Fast steps", "\uD83D\uDCF1 Mobile"],
  },
  {
    titleKey: "p2",
    subKey: "p2s",
    metrics: ["\uD83D\uDCC8 Growth", "\uD83E\uDDE0 Strategy", "\uD83E\uDDF2 Leads"],
  },
  {
    titleKey: "p3",
    subKey: "p3s",
    metrics: ["\uD83E\uDD16 AI", "\uD83E\uDDE9 Stack", "\u2705 Practical"],
  },
];

export default function ContentFeed({ lang }: { lang: string }) {
  const c = COPY[lang];

  return (
    <div className="feed">
      {POSTS.map((post, i) => (
        <div className="post" key={i}>
          <div className="thumb" />
          <div className="pad">
            <b>{c[post.titleKey]}</b>
            <p className="card-desc">{c[post.subKey]}</p>
            <div className="meta">
              {post.metrics.map((m, j) => (
                <span className="metric" key={j}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
