import { SOCIAL_LINKS, SOCIAL_SUBTITLES, SOCIAL_ORDER } from "@/config/social";
import { SocialIcon } from "./SocialIcons";

export default function SocialStrip({ lang }: { lang: string }) {
  const links = SOCIAL_LINKS[lang] || {};

  return (
    <div className="social-strip">
      {SOCIAL_ORDER.map((platform) => {
        const url = links[platform];
        if (!url) return null;

        const subtitle = SOCIAL_SUBTITLES[platform]?.[lang] || "";
        const label =
          platform.charAt(0).toUpperCase() + platform.slice(1);

        return (
          <a
            key={platform}
            className="social-btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon platform={platform} />
            <div>
              <div>{label}</div>
              <small>{subtitle}</small>
            </div>
          </a>
        );
      })}
    </div>
  );
}
