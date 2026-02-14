import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialStrip from "@/components/SocialStrip";
import EBooks from "@/components/EBooks";
import WorkWithMe from "@/components/WorkWithMe";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { COPY } from "@/config/copy";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const c = COPY[lang] || COPY.en;

  return (
    <>
      <Header lang={lang} />
      <Hero lang={lang} />

      <section className="section-grid">
        {/* eBooks section */}
        <div className="card span12 pad" id="ebooks">
          <h2 className="card-title">{c.eTitle}</h2>
          <p className="card-desc">{c.eSub}</p>
          <EBooks lang={lang} />
        </div>

        {/* Work with me section */}
        <div className="card span12 pad" id="work">
          <h2 className="card-title">{c.wTitle}</h2>
          <p className="card-desc">{c.wSub}</p>
          <WorkWithMe lang={lang} />
        </div>

        {/* Newsletter section */}
        <div className="card span12 pad" id="newsletter">
          <h2 className="card-title">{c.nTitle}</h2>
          <p className="card-desc">{c.nSub}</p>
          <Newsletter lang={lang} />
        </div>

        {/* Social media */}
        <div className="card span12 pad" id="social">
          <h2 className="card-title">{c.socialTitle}</h2>
          <SocialStrip lang={lang} />
        </div>
      </section>

      <Footer lang={lang} />
    </>
  );
}
