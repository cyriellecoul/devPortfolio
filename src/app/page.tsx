
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BugPlay, CalendarClock, Code2, Handshake, Lightbulb, LampWallDownIcon, Smartphone, ExternalLink } from "lucide-react";
import { useAppContext } from "@/context/app-context";
import { useState, useEffect } from "react";

export default function Home() {
  const { t, lang } = useAppContext();
  const [displayText, setDisplayText] = useState("");

  const accentTexts = t.hero.titleAccent;

  useEffect(() => {
    setDisplayText("");
  }, [accentTexts]);

  useEffect(() => {
    if (displayText.length < accentTexts.length) {
      const timeout = setTimeout(() => {
        setDisplayText(accentTexts.slice(0, displayText.length + 1));
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [displayText, accentTexts]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-10 pb-20 md:pt-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xl font-bold uppercase tracking-wider mb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <LampWallDownIcon className="w-6 h-6" />
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6 max-w-4xl tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.hero.titleName}<br /><span className="text-secondary whitespace-nowrap text-[clamp(1.5rem,5vw,4rem)]">{displayText}<span className="animate-pulse">|</span></span>
        </h1>
        <p className="font-body text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {t.hero.description1}<strong>{t.hero.description2}</strong>{t.hero.description3}
        </p>
        <p className="font-body text-2xl text-muted-foreground mb-2 max-w-4xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {t.hero.descriptionJob1} <br /><strong>{t.hero.titleJob1}</strong>{t.hero.descriptionJob2}<strong>{t.hero.titleJob2}</strong> {t.hero.descriptionJob3}
        </p>
        <p className="font-body text-base md:text-xl text-muted-foreground mb-10 max-w-6xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 italic">
          <p>{t.hero.personnalText}</p>
        </p>
        <p className="font-body text-xl text-muted-foreground mb-10 max-w-6xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <strong>{t.hero.languagesWebTitle}</strong>{t.hero.languagesWeb}<br /> <strong>{t.hero.languagesMobileTitle}</strong>{t.hero.languagesMobile} <br /> <strong>{t.hero.DevOpsTitle}</strong>{t.hero.DevOpsSkills}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Button asChild size="lg" className="bg-primary text-white h-14 px-8 text-base">
            <Link href="/projects" className="flex items-center gap-2">
              {t.hero.viewWork} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 h-14 px-8 text-base">
            <Link href="/contact">{t.hero.getInTouch}</Link>
          </Button>
        </div>
        <div className="bg-cardVisible mt-8 p-8 border rounded-3xl text-center max-w-md w-full">
          <h4 className="font-headline font-bold text-visible mb-2">{t.contact.downloadCv}</h4>
          <Button asChild variant="visible" className="w-full" >
            <Link href={`https://cyriellecoul.github.io/MY_CV/?lang=${lang || 'fr'}`} target="_blank">
              <ExternalLink className="card-visible w-4 h-4 mr-2" />{t.contact.interactiveCV}</Link>
          </Button>
        </div>
      </section>

      {/* Quick Features */}
      <section className="bg-card py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: <Code2 className="w-10 h-10 text-secondary" />,
                title: t.features.modernStack,
                desc: t.features.modernStackDesc
              },
              {
                icon: <Smartphone className="w-10 h-10 text-secondary" />,
                title: t.features.mobileFirst,
                desc: t.features.mobileFirstDesc
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-secondary" />,
                title: t.features.teamWork,
                desc: t.features.teamWorkDesc
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
          {/* New Features with Bullet Points */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BugPlay className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature1Title,
                bullets: t.features.bulletFeature1List
              },
              {
                icon: <Handshake className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature2Title,
                bullets: t.features.bulletFeature2List
              },
              {
                icon: <CalendarClock className="w-10 h-10 text-secondary" />,
                title: t.features.bulletFeature3Title,
                bullets: t.features.bulletFeature3List
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border bg-background hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <ul className="text-muted-foreground list-disc list-inside text-left">
                  {feature.bullets.map((point: string, idx: number) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
