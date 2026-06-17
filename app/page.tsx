"use client";

import Image from "next/image";
import type { ReactNode, SVGProps } from "react";
import {
  ArrowUpRight,
  Building2,
  Camera,
  ChevronRight,
  CirclePlay,
  Download,
  ExternalLink,
  Menu,
  Search,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Lift, Reveal, ScrollProgress } from "@/components/motion";

const asset = (name: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/${name}`;
const media = (name: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/${name}`;

const navItems = [
  { href: "#film", label: "Film" },
  { href: "#proof", label: "Proof" },
  { href: "#research", label: "Research" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" }
];

const proofItems = [
  { value: "8M+", label: "누적 다운로드" },
  { value: "3.5M+", label: "누적 게시글" },
  { value: "900K+", label: "리얼 후기" },
  { value: "3.3K+", label: "의사·병원 정보" }
];

const researchItems = [
  {
    icon: Search,
    title: "비교 가능한 정보",
    text: "후기, 가격, 관심 부위를 한 화면에서 비교할 수 있도록 정보의 단위를 정리합니다."
  },
  {
    icon: Camera,
    title: "상담 전 맥락",
    text: "사진 첨부와 시술 목적을 먼저 정리해 상담이 막연한 질문으로 시작되지 않게 합니다."
  },
  {
    icon: ShieldCheck,
    title: "신뢰 중심 구조",
    text: "브랜드 감성보다 검증 가능한 기준을 앞세워 뷰티 선택의 불확실성을 줄입니다."
  }
];

const storyCards = [
  {
    kicker: "APP EXPERIENCE",
    title: "원하는 시술을 빠르게 찾는 탐색 구조",
    text: "모바일에서 가장 먼저 필요한 검색, 후기, 가격 단서를 한 흐름에 묶었습니다.",
    image: "imgi_49_sec5-slide_01.png"
  },
  {
    kicker: "PHOTO CONSULT",
    title: "상담 전에 필요한 사진과 정보를 먼저 정리",
    text: "상담자가 판단해야 할 맥락을 사용자가 쉽게 준비할 수 있게 설계합니다.",
    image: "imgi_52_sec6-bg.jpg"
  },
  {
    kicker: "BEAUTY CONTENTS",
    title: "짧고 명확한 영상 콘텐츠로 신뢰를 쌓는 흐름",
    text: "긴 설명보다 실제 사례와 톤을 빠르게 확인하는 미디어 섹션입니다.",
    image: "imgi_63_mqdefault.jpg"
  }
];

const mediaTiles = [
  "imgi_64_mqdefault.jpg",
  "imgi_65_mqdefault.jpg",
  "imgi_66_mqdefault.jpg",
  "imgi_67_mqdefault.jpg"
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/90 px-4 shadow-[0_18px_60px_rgba(39,39,42,0.14)] backdrop-blur-2xl sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="BEAULAB home">
          <Image src={asset("imgi_1_logo.png")} alt="BEAULAB" width={128} height={26} priority />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--brand-pink)]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center justify-center rounded-full bg-[var(--brand-pink)] px-5 text-sm font-black text-white shadow-[0_12px_34px_rgba(242,47,134,0.35)] transition hover:bg-[var(--brand-pink-dark)] sm:inline-flex"
          >
            문의하기
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div id="film" className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={asset("imgi_2_ms1.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="BEAULAB brand film"
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => undefined);
          }}
        >
          <source src={media("270065_medium.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_34%,rgba(255,47,145,0.18),transparent_36%),linear-gradient(90deg,rgba(9,9,11,0.86),rgba(9,9,11,0.48)_48%,rgba(9,9,11,0.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="film-grain absolute inset-0 opacity-50" />
        <div className="pink-scan absolute inset-x-0 top-0 h-1" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:pb-12 lg:justify-center lg:pt-24">
        <Reveal className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[var(--brand-pink-light)]" aria-hidden="true" />
            Full Screen Brand Film
          </div>
          <h1 className="hero-title mt-7 max-w-3xl text-balance text-4xl font-black leading-[1.06] tracking-normal sm:text-6xl lg:text-7xl">
            오직 뷰티만을
            <br />
            연구합니다
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg sm:leading-8">
            시술 정보, 실제 후기, 사진 상담 흐름을 하나의 브랜드 경험으로 묶어 뷰티 선택의 불확실성을 줄입니다.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#stories"
              className="inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[var(--brand-pink)] px-6 py-4 text-sm font-black text-white shadow-[0_20px_60px_rgba(242,47,134,0.42)] transition hover:bg-[var(--brand-pink-dark)]"
            >
              <CirclePlay className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              PLAY FILM
            </a>
            <a
              href="#proof"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/20"
            >
              데이터 보기
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-12 grid grid-cols-2 gap-3 border-t border-white/20 pt-5 sm:grid-cols-4 lg:absolute lg:bottom-10 lg:right-5 lg:mt-0 lg:w-[520px] lg:border-t-0 lg:pt-0">
          {proofItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
              <p className="text-xl font-black text-white sm:text-2xl">{item.value}</p>
              <p className="mt-1 text-xs font-semibold text-white/60">{item.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section id="proof" className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-pink)]">Proof</p>
          <h2 className="mt-4 text-3xl font-black leading-[1.12] text-zinc-950 sm:text-4xl lg:text-5xl">
            핑크는 감성이고,
            <br />
            구조는 데이터입니다
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            예쁜 화면만으로는 부족합니다. 뷰랩은 사용자가 비교하고 결정할 수 있는 정보 구조를 먼저 세웁니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="group bg-white p-7 text-center transition hover:bg-[var(--brand-pink-soft)] sm:p-9">
              <p className="text-3xl font-black text-zinc-950 sm:text-4xl">{item.value}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-500 group-hover:text-zinc-700">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="relative overflow-hidden bg-[#fff4f8] px-5 py-16 sm:py-24">
      <div className="brand-glow absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-pink)]">Research</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.12] text-zinc-950 sm:text-4xl lg:text-5xl">
              예쁜 화면보다
              <br />
              덜 흔들리는 결정
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              뷰티 서비스에서 트렌디함은 기본값입니다. 전환을 만들려면 사용자가 비교 기준을 잃지 않아야 합니다.
            </p>
          </Reveal>
          <div className="mt-9 grid gap-4">
            {researchItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06} className="rounded-3xl border border-white bg-white/90 p-5 shadow-[0_18px_60px_rgba(242,47,134,0.08)] backdrop-blur-md">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-pink)] text-white shadow-[0_14px_34px_rgba(242,47,134,0.28)]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-zinc-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Lift className="relative overflow-hidden rounded-[36px] bg-zinc-950 shadow-[0_30px_90px_rgba(242,47,134,0.18)]">
          <div className="relative aspect-[1.12] min-h-[460px] overflow-hidden">
            <Image
              src={asset("imgi_32_sec3_04.png")}
              alt="BEAULAB service cards"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
            <div className="absolute bottom-7 left-7 max-w-sm text-white">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-pink-light)]">Curation</p>
              <p className="mt-3 text-2xl font-black leading-tight lg:text-3xl">흩어진 정보를 비교 가능한 카드로</p>
              <p className="mt-4 text-sm leading-7 text-white/60">이미지와 가격, 후기 맥락을 한 번에 훑을 수 있게 정리합니다.</p>
            </div>
          </div>
        </Lift>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section id="stories" className="bg-white px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-pink)]">Stories</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.12] text-zinc-950 sm:text-4xl lg:text-5xl">
              화면은 가볍게,
              <br />
              맥락은 선명하게
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-sm text-base leading-8 text-zinc-600">
            팀 브랜딩형 레이아웃을 가져오되, 뷰랩은 서비스 신뢰와 사용 장면 중심으로 재배치했습니다.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {storyCards.map((card, index) => (
            <Lift
              key={card.title}
              delay={index * 0.06}
              className="group overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_18px_55px_rgba(24,24,27,0.08)] transition hover:border-[var(--brand-pink)]"
            >
              <div className="relative aspect-[1.08] overflow-hidden bg-zinc-100">
                <Image
                  src={asset(card.image)}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-pink)]">{card.kicker}</p>
                <h3 className="mt-3 text-xl font-black leading-snug text-zinc-950 sm:text-2xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-zinc-950">
                  자세히 보기
                  <ChevronRight className="h-4 w-4 text-[var(--brand-pink)]" aria-hidden="true" />
                </span>
              </div>
            </Lift>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section className="bg-zinc-950 px-5 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-7 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-pink-light)]">Media</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.12] sm:text-4xl lg:text-5xl">
              짧게 보고
              <br />
              빠르게 판단
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            실제 mp4가 준비되면 첫 화면 풀스크린 필름에 연결하고, 이 영역은 보조 콘텐츠 라이브러리로 남기면 됩니다.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mediaTiles.map((tile, index) => (
            <Lift key={tile} delay={index * 0.05} className="group overflow-hidden rounded-[24px] bg-white/10 ring-1 ring-white/10 transition hover:ring-[var(--brand-pink)]">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={asset(tile)}
                  alt="BEAULAB media thumbnail"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[var(--brand-pink)] text-white shadow-[0_14px_36px_rgba(242,47,134,0.42)]">
                    <CirclePlay className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Lift>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#fff4f8] px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] bg-white p-6 shadow-[0_28px_90px_rgba(242,47,134,0.14)] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[var(--brand-pink)]">Contact</p>
          <h2 className="mt-4 text-3xl font-black leading-[1.12] text-zinc-950 sm:text-4xl lg:text-5xl">
            뷰티 선택을
            <br />
            더 명확하게
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            지금 버전은 풀스크린 브랜드 필름을 1순위 전환 자산으로 잡았습니다. 실제 영상, 앱 다운로드, 제휴 문의 중 어느 CTA를 최우선으로 둘지 정하면 더 날카롭게 줄일 수 있습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#film"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-pink)] px-6 text-sm font-black text-white shadow-[0_14px_34px_rgba(242,47,134,0.32)] transition hover:bg-[var(--brand-pink-dark)]"
            >
              영상 보기
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-black text-zinc-950 transition hover:border-[var(--brand-pink)]"
            >
              앱 다운로드
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid content-between gap-5 rounded-[30px] bg-zinc-950 p-6 text-white sm:p-8">
          <div>
            <Image src={asset("imgi_74_logo_ft.png")} alt="BEAULAB" width={174} height={42} className="brightness-0 invert" />
            <div className="mt-8 flex flex-wrap gap-2">
              {["Beauty", "Review", "Consult", "Data"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white/70">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-2xl font-black leading-tight">
              Beautiful choices,
              <br />
              verified by context.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/60">
            <a href="mailto:contact@beaulab.co.kr" className="inline-flex items-center justify-between border-t border-white/10 pt-4 transition hover:text-white">
              contact@beaulab.co.kr
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#" className="inline-flex items-center justify-between border-t border-white/10 pt-4 transition hover:text-white">
              Instagram
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center justify-between border-t border-white/10 pt-4">
              Seoul, Korea
              <Building2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.2 8.35V6.9c0-.7.46-.86.78-.86h2V3.1L14.23 3.08c-3.05 0-3.74 2.28-3.74 3.74v1.53H8.52v3h1.97V21h3.3v-9.65h2.73l.36-3h-2.68Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect width="15.5" height="15.5" x="4.25" y="4.25" rx="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.2 7.65a3 3 0 0 0-2.12-2.12C17.2 5 12 5 12 5s-5.2 0-7.08.53A3 3 0 0 0 2.8 7.65 31.3 31.3 0 0 0 2.28 12c0 1.47.18 2.93.52 4.35a3 3 0 0 0 2.12 2.12C6.8 19 12 19 12 19s5.2 0 7.08-.53a3 3 0 0 0 2.12-2.12c.34-1.42.52-2.88.52-4.35 0-1.47-.18-2.93-.52-4.35ZM10.05 15.02V8.98L15.38 12l-5.33 3.02Z" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-300 text-white transition hover:bg-[var(--brand-pink)] focus:outline-none focus:ring-4 focus:ring-pink-100"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-zinc-200 bg-white px-5 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <Image src={asset("imgi_1_logo.png")} alt="BEAULAB" width={150} height={31} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="text-xl font-black text-zinc-950">뷰랩</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500">오직 뷰티만을 연구합니다.</p>

            <address className="mt-7 not-italic text-sm leading-8 text-zinc-500">
              <p>사업자등록번호 : 정보 입력 필요</p>
              <p>주소 : 정보 입력 필요</p>
              <p>
                Fax : 정보 입력 필요 <span className="mx-2 text-zinc-300">|</span>
                <a href="mailto:contact@beaulab.co.kr" className="transition hover:text-[var(--brand-pink)]">
                  contact@beaulab.co.kr
                </a>
              </p>
            </address>

            <nav className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm font-black text-zinc-950" aria-label="Footer">
              <a href="#" className="transition hover:text-[var(--brand-pink)]">
                개인정보 처리방침
              </a>
              <a href="#" className="transition hover:text-[var(--brand-pink)]">
                서비스 이용약관
              </a>
              <a href="#contact" className="transition hover:text-[var(--brand-pink)]">
                제휴 문의
              </a>
            </nav>
          </div>

          <div className="flex gap-3 lg:justify-end">
            <SocialButton href="#" label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialButton>
            <SocialButton href="#" label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </SocialButton>
            <SocialButton href="#" label="YouTube">
              <YouTubeIcon className="h-5 w-5" />
            </SocialButton>
            <SocialButton href="#" label="Blog">
              <span className="text-sm font-black">B</span>
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <ProofSection />
      <ResearchSection />
      <StoriesSection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
