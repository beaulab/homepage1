"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  Clock3,
  Download,
  Gem,
  Heart,
  MapPin,
  Navigation,
  PlayCircle,
  Quote,
  ScanLine,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import { FeatureCard, GlassCard, GradientButton, IconBadge, ImageCard, Section, SectionHeader } from "@/components/ui";
import { Lift, Reveal, ScrollProgress } from "@/components/motion";

const asset = (name: string) => `/images/${name}`;

const stats = [
  { value: "01", label: "뷰티 정보 집중" },
  { value: "1:1", label: "맞춤 상담 흐름" },
  { value: "360", label: "후기 기반 탐색" },
  { value: "SAFE", label: "신뢰도 중심 구조" }
];

const features = [
  {
    icon: Search,
    title: "필요한 정보만 빠르게",
    description: "카테고리와 관심 부위 중심으로 복잡한 시술 정보를 압축해 보여주는 탐색 경험을 설계했습니다."
  },
  {
    icon: Sparkles,
    title: "프리미엄 큐레이션",
    description: "가격, 후기, 이벤트를 한 화면에서 비교할 수 있도록 카드 밀도와 여백의 균형을 다시 잡았습니다."
  },
  {
    icon: ShieldCheck,
    title: "안심할 수 있는 선택",
    description: "상담, 사진 첨부, 안전 안내를 분리해 사용자가 다음 행동을 명확히 이해하도록 구성했습니다."
  }
];

const serviceCards = [
  {
    label: "Face",
    title: "눈·코·윤곽",
    description: "얼굴 라인과 인상 변화를 섬세하게 비교할 수 있는 대표 시술 큐레이션.",
    image: "imgi_15_sec2-slide_01_01.png"
  },
  {
    label: "Body",
    title: "가슴·체형",
    description: "전후 이미지와 핵심 정보를 한 번에 확인하는 바디 시술 탐색.",
    image: "imgi_17_sec2-slide_02_01.png"
  },
  {
    label: "Skin",
    title: "피부·리프팅",
    description: "피부 고민별 시술과 트렌드 정보를 가볍게 비교하는 섹션.",
    image: "imgi_19_sec2-slide_03_01.png"
  },
  {
    label: "Petit",
    title: "쁘띠·필러",
    description: "짧은 회복과 자연스러운 변화를 원하는 사용자를 위한 선택지.",
    image: "imgi_21_sec2-slide_04_01.png"
  },
  {
    label: "Hair",
    title: "헤어·컬러",
    description: "이미지 중심으로 취향을 고르고 상담까지 이어지는 뷰티 경험.",
    image: "imgi_23_sec2-slide_05_01.png"
  },
  {
    label: "Care",
    title: "관리·케어",
    description: "시술 전후 관리와 리뷰를 함께 볼 수 있는 라이프스타일형 콘텐츠.",
    image: "imgi_25_sec2-slide_06_01.png"
  }
];

const appScreens = [
  "imgi_49_sec5-slide_01.png",
  "imgi_50_sec5-slide_02.png",
  "imgi_51_sec5-slide_03.png",
  "imgi_47_sec5-slide_04.png",
  "imgi_48_sec5-slide_05.png"
];

const process = [
  {
    icon: Camera,
    title: "사진 첨부",
    description: "정면, 측면, 45도 이미지를 기준으로 상담에 필요한 맥락을 정리합니다."
  },
  {
    icon: Users,
    title: "비교 상담",
    description: "관심 부위와 예산, 회복 기간을 기준으로 선택지를 좁혀갑니다."
  },
  {
    icon: CheckCircle2,
    title: "결정 보조",
    description: "후기와 이벤트를 함께 확인하고 다음 액션으로 자연스럽게 연결합니다."
  }
];

const trustCards = [
  {
    icon: ShieldCheck,
    title: "SAFE ZONE",
    description: "과장된 비주얼보다 확인 가능한 정보와 안정적인 상담 플로우를 우선합니다."
  },
  {
    icon: BadgeCheck,
    title: "검증된 흐름",
    description: "사용자가 무엇을 비교하고 어떤 기준으로 결정해야 하는지 명확히 보여줍니다."
  },
  {
    icon: Heart,
    title: "뷰티 특화 UX",
    description: "일반 커머스가 아니라 뷰티 탐색에 맞춘 이미지, 후기, CTA 구조를 적용했습니다."
  }
];

const videoThumbs = [
  "imgi_63_mqdefault.jpg",
  "imgi_64_mqdefault.jpg",
  "imgi_65_mqdefault.jpg",
  "imgi_66_mqdefault.jpg",
  "imgi_67_mqdefault.jpg",
  "imgi_68_mqdefault.jpg"
];

const reviewStats: Array<{ value: string; title: string; icon: LucideIcon }> = [
  { value: "4.7", title: "평점 중심 리뷰", icon: Quote },
  { value: "#Tag", title: "관심 부위 해시태그", icon: Star },
  { value: "CTA", title: "명확한 상담 연결", icon: Sparkles },
  { value: "Flow", title: "짧은 스크롤 리듬", icon: Heart }
];

const signalItems = [
  "BEAUTY CURATION",
  "REAL REVIEW",
  "SAFE ZONE",
  "PHOTO CONSULT",
  "PREMIUM UX",
  "FAST SEARCH"
];

function StoreLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#download" className="transition duration-300 hover:scale-105" aria-label="Google Play로 이동">
        <Image src={asset("imgi_6_gp.png")} alt="Google Play" width={124} height={50} />
      </a>
      <a href="#download" className="transition duration-300 hover:scale-105" aria-label="App Store로 이동">
        <Image src={asset("imgi_7_as.png")} alt="App Store" width={124} height={50} />
      </a>
    </div>
  );
}

function Header() {
  const links = [
    { href: "#services", label: "서비스" },
    { href: "#experience", label: "앱 경험" },
    { href: "#review", label: "후기" },
    { href: "#location", label: "위치" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/72 px-4 py-3 shadow-lg shadow-gray-200/60 backdrop-blur-2xl sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="BEAULAB 홈으로 이동">
          <Image src={asset("imgi_1_logo.png")} alt="BEAULAB" width={125} height={26} priority />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-500 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-gray-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gray-950 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gray-950 px-4 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">다운로드</span>
        </a>
      </div>
    </header>
  );
}

function HeroEffectCards() {
  const items: Array<{
    icon: LucideIcon;
    title: string;
    text: string;
    className: string;
    delay: number;
  }> = [
    {
      icon: Star,
      title: "4.7 Review",
      text: "실제 후기 기반 탐색",
      className: "right-[6%] top-[27%]",
      delay: 0.18
    },
    {
      icon: ScanLine,
      title: "Photo Consult",
      text: "사진 첨부 상담 흐름",
      className: "right-[24%] top-[58%]",
      delay: 0.26
    },
    {
      icon: Gem,
      title: "Premium Pick",
      text: "시술 정보 큐레이션",
      className: "right-[5%] top-[71%]",
      delay: 0.34
    }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          delay={item.delay}
          className={`absolute ${item.className} ${index === 1 ? "floating-y-slow" : "floating-y"}`}
        >
          <div className="premium-card flex min-w-56 items-center gap-4 rounded-[24px] border border-white/75 bg-white/68 p-4 shadow-premium backdrop-blur-2xl">
            <IconBadge icon={item.icon} className="h-11 w-11 rounded-xl" />
            <div>
              <p className="text-sm font-semibold text-gray-950">{item.title}</p>
              <p className="mt-1 text-xs text-gray-500">{item.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-10 pt-24 sm:pt-24 lg:min-h-[650px] lg:pb-10">
      <Image
        src={asset("imgi_2_ms1.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 hero-wash" />
      <div className="noise-layer absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbfbfd] to-transparent" />
      <HeroEffectCards />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="max-w-2xl pt-4 lg:pt-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg shadow-gray-200/60 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blush-500" aria-hidden="true" />
            Beautiful your life
          </div>
          <h1 className="bg-gradient-to-r from-gray-950 via-gray-900 to-blush-500 bg-clip-text text-5xl font-semibold leading-none text-transparent sm:text-6xl lg:text-8xl">
            BEAULAB
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-8 text-gray-600 sm:text-xl">
            오직 뷰티만을 연구하는 프리미엄 큐레이션 플랫폼. 시술 정보, 실제 후기, 상담 흐름을 더 가볍고 세련되게 연결합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="#services">둘러보기</GradientButton>
            <GradientButton href="#download" variant="secondary">
              앱으로 시작
            </GradientButton>
          </div>
          <div className="mt-7">
            <StoreLinks />
          </div>
        </Reveal>

        <div className="mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.06}
              className="premium-card rounded-[22px] border border-white/75 bg-white/68 p-4 shadow-lg shadow-gray-200/60 backdrop-blur-2xl"
            >
              <p className="text-2xl font-semibold text-gray-950">{item.value}</p>
              <p className="mt-1 text-sm text-gray-500">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalMarquee() {
  const repeated = [...signalItems, ...signalItems];

  return (
    <div className="px-5 pb-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-full border border-white/80 glass-rail shadow-lg shadow-gray-200/60 backdrop-blur-2xl">
        <div className="ticker-track flex w-max items-center gap-7 py-4">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3 px-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blush-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandSection() {
  return (
    <Section id="brand" className="pt-8">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Brand System"
            title="이미지는 화려하게, 선택 과정은 단순하게."
            description="기존 자산의 핑크 톤과 앱 중심 비주얼은 유지하되, 레이아웃은 더 넓은 여백과 명확한 정보 계층으로 재정리했습니다."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 0.08} />
            ))}
          </div>
        </div>

        <Reveal className="relative overflow-hidden rounded-[36px] bg-gray-950 p-8 shadow-premium sm:p-10">
          <div className="absolute inset-0 bg-soft-radial opacity-70" />
          <div className="relative">
            <Image
              src={asset("imgi_3_ms-txt.png")}
              alt="아름다움을 연구하다 뷰티연구소 뷰랩"
              width={588}
              height={392}
              className="h-auto w-full opacity-95"
            />
            <div className="mt-8 grid grid-cols-2 items-end gap-4">
              <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <Image
                  src={asset("imgi_4_ms1-1.png")}
                  alt="BEAULAB 앱 오브젝트"
                  width={200}
                  height={237}
                  className="mx-auto h-auto max-h-44 w-auto"
                />
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <Image
                  src={asset("imgi_5_ms1-2.png")}
                  alt="BEAULAB 인터페이스 오브젝트"
                  width={259}
                  height={260}
                  className="mx-auto h-auto max-h-44 w-auto"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ServicesSection() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeader
        eyebrow="Beauty Curation"
        title="시술 탐색을 카드형 경험으로 정리"
        description="모바일에서는 1열, 태블릿에서는 2열, 데스크톱에서는 3열로 자연스럽게 확장되는 구조입니다."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card, index) => (
          <ImageCard
            key={card.title}
            src={asset(card.image)}
            alt={`${card.title} 큐레이션 이미지`}
            label={card.label}
            title={card.title}
            description={card.description}
            delay={index * 0.05}
          />
        ))}
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience">
      <div className="premium-card overflow-hidden rounded-[38px] border border-white/80 bg-white/78 p-5 shadow-premium backdrop-blur-2xl sm:p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="App Experience"
              title="리뷰와 추천을 하나의 흐름으로"
              description="후기, 이벤트, 상세 정보를 각각 흩어놓지 않고 사용자의 탐색 단계에 맞춰 정렬했습니다."
            />
            <div className="mt-8 space-y-4">
              {[
                "후기 이미지를 크게 보여주는 시각 중심 카드",
                "핵심 CTA는 한 화면에 하나씩 명확하게 배치",
                "모바일 터치 영역과 스크롤 리듬을 넉넉하게 확보"
              ].map((item, index) => (
                <Reveal key={item} delay={index * 0.06} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 flex-none text-blush-500" aria-hidden="true" />
                  <span className="text-sm sm:text-base">{item}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {appScreens.map((screen, index) => (
              <Lift
                key={screen}
                delay={index * 0.05}
                className={index === 0 ? "sm:col-span-2" : ""}
              >
                <div className="screen-sheen overflow-hidden rounded-[28px] bg-blush-50 shadow-lg shadow-gray-200/70">
                  <Image
                    src={asset(screen)}
                    alt="BEAULAB 앱 후기 화면"
                    width={572}
                    height={641}
                    className="h-auto w-full transition duration-700 hover:scale-105"
                  />
                </div>
              </Lift>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ConsultationSection() {
  return (
    <Section id="consult">
      <div className="relative overflow-hidden rounded-[38px] bg-blush-200 shadow-premium">
        <Image
          src={asset("imgi_52_sec6-bg.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10" />
        <div className="relative grid min-h-[620px] items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Consulting Flow"
              title="사진 첨부부터 상담까지 더 자연스럽게"
              description="원본의 사진 상담 비주얼을 살리면서, 사용자가 해야 할 일을 3단계로 압축했습니다."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton href="#download">상담 시작</GradientButton>
              <GradientButton href="#review" variant="secondary">
                후기 보기
              </GradientButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {process.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.08} className="bg-white/76">
                <div className="flex items-start gap-4">
                  <IconBadge icon={item.icon} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-500">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TrustSection() {
  return (
    <Section id="safe" className="bg-white">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="screen-sheen relative min-h-[520px] overflow-hidden rounded-[38px] shadow-premium">
          <Image
            src={asset("imgi_56_sec7-bg.jpg")}
            alt="BEAULAB Safe Zone"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        </Reveal>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Trust Layer"
            title="예쁜 화면보다 중요한 것은 신뢰 구조"
            description="뷰티 서비스에서 트렌디함은 기본값입니다. 실제 전환을 만들려면 사용자가 비교 기준을 잃지 않게 해야 합니다."
          />
          <div className="mt-8 grid gap-4">
            {trustCards.map((card, index) => (
              <FeatureCard key={card.title} {...card} delay={index * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ReviewSection() {
  return (
    <Section id="review">
      <SectionHeader
        eyebrow="Real Review"
        title="후기는 이미지 중심으로, 텍스트는 가볍게"
        description="사용자가 가장 먼저 확인하는 전후 이미지와 평점, 핵심 해시태그가 한눈에 들어오도록 구성했습니다."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <Lift className="screen-sheen overflow-hidden rounded-[34px] bg-white shadow-premium">
          <Image
            src={asset("imgi_49_sec5-slide_01.png")}
            alt="BEAULAB 후기 화면"
            width={572}
            height={641}
            className="h-full w-full object-cover"
          />
        </Lift>
        <div className="grid gap-5 sm:grid-cols-2">
          {reviewStats.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.06} className="min-h-48">
              <IconBadge icon={item.icon} />
              <p className="mt-6 text-3xl font-semibold text-gray-950">{item.value}</p>
              <p className="mt-2 text-sm text-gray-500">{item.title}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

function MediaSection() {
  return (
    <Section id="media" className="bg-white">
      <SectionHeader
        eyebrow="Video Contents"
        title="콘텐츠는 짧게, 탐색은 빠르게"
        description="영상 썸네일은 복잡한 설명 없이 카드 그리드로 배치해 브랜드의 활동성을 보여줍니다."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videoThumbs.map((thumb, index) => (
          <Lift key={thumb} delay={index * 0.04} className="premium-card group overflow-hidden rounded-[26px] bg-white shadow-lg shadow-gray-200/70">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={asset(thumb)}
                alt="BEAULAB 영상 콘텐츠 썸네일"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-950/10 transition group-hover:bg-gray-950/20">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-blush-500 shadow-lg backdrop-blur-xl">
                  <PlayCircle className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Lift>
        ))}
      </div>
    </Section>
  );
}

function LocationSection() {
  return (
    <Section id="location">
      <div className="relative overflow-hidden rounded-[38px] bg-white shadow-premium">
        <Image
          src={asset("imgi_33_sec4-bg.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/50" />
        <div className="relative grid min-h-[560px] items-center gap-8 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Offline Touch"
              title="온라인 탐색 이후의 다음 목적지"
              description="원본 지도 비주얼은 유지하고, 방문 정보는 간결한 카드형 리스트로 정리했습니다."
            />
            <div className="mt-8 grid gap-4">
              {[
                { icon: MapPin, title: "강남역권 중심", text: "접근성이 좋은 위치 정보를 우선 노출" },
                { icon: Clock3, title: "상담 동선 단순화", text: "앱에서 탐색하고 방문 전 필요한 정보를 확인" },
                { icon: Navigation, title: "빠른 길찾기", text: "지도와 CTA가 자연스럽게 이어지는 구조" }
              ].map((item, index) => (
                <GlassCard key={item.title} delay={index * 0.06} className="bg-white/78">
                  <div className="flex items-center gap-4">
                    <IconBadge icon={item.icon} />
                    <div>
                      <p className="font-semibold text-gray-950">{item.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.text}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
          <Reveal className="hidden lg:block" />
        </div>
      </div>
    </Section>
  );
}

function DownloadSection() {
  return (
    <Section id="download" className="pb-10">
      <div className="relative overflow-hidden rounded-[38px] bg-gray-950 p-6 shadow-premium sm:p-10 lg:p-14">
        <div className="noise-layer absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blush-500/22 via-transparent to-lavender-500/22" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blush-200">
              Download
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
              더 가벼운 뷰티 탐색을 지금 시작하세요.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
              필요한 정보는 선명하게, 화면은 더 여유롭게. BEAULAB의 핵심 경험을 모바일에 최적화했습니다.
            </p>
            <div className="mt-8">
              <StoreLinks />
            </div>
          </div>
          <Lift className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-white/8">
            <Image
              src={asset("imgi_69_sec9-bg.jpg")}
              alt="BEAULAB 모바일 앱"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </Lift>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Image src={asset("imgi_74_logo_ft.png")} alt="BEAULAB" width={174} height={42} />
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            BEAUTY LAB
          </span>
          <span>© BEAULAB. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ScrollProgress />
      <Header />
      <Hero />
      <SignalMarquee />
      <BrandSection />
      <ServicesSection />
      <ExperienceSection />
      <ConsultationSection />
      <TrustSection />
      <ReviewSection />
      <MediaSection />
      <LocationSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
