export type SocialPlatform =
  | "youtube"
  | "linkedin"
  | "instagram"
  | "tiktok"
  | "x"
  | "facebook"
  | "threads";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
  subtitle: Record<string, string>;
}

export const SOCIAL_LINKS: Record<string, Partial<Record<SocialPlatform, string>>> = {
  en: {
    youtube: "https://www.youtube.com/@LeonelUlloaAIMarketing",
    linkedin: "https://www.linkedin.com/in/leonel-ulloa-ai",
  },
  es: {
    youtube: "https://www.youtube.com/@LeonelUlloaES",
    linkedin: "https://www.linkedin.com/in/leonel-ulloa-ai",
    instagram: "https://www.instagram.com/leonel_ulloa_ai/",
    tiktok: "https://www.tiktok.com/@leonel_ulloa_ai",
    x: "https://x.com/leonel_ulloa_ai",
    facebook: "https://www.facebook.com/profile.php?id=61587549137022",
    threads: "https://www.threads.com/@leonel_ulloa_ai",
  },
};

export const SOCIAL_SUBTITLES: Record<SocialPlatform, Record<string, string>> = {
  youtube: { en: "Watch the channel", es: "Ver el canal" },
  tiktok: { en: "Short visual tips", es: "Tips visuales" },
  linkedin: { en: "Business insights", es: "Ideas de negocio" },
  instagram: { en: "Daily reels", es: "Reels diarios" },
  x: { en: "Updates + threads", es: "Actualizaciones" },
  facebook: { en: "Page & updates", es: "Página y posts" },
  threads: { en: "Micro posts", es: "Micro posts" },
};

/** Ordered list of platforms to display */
export const SOCIAL_ORDER: SocialPlatform[] = [
  "youtube",
  "tiktok",
  "linkedin",
  "instagram",
  "x",
  "facebook",
  "threads",
];
