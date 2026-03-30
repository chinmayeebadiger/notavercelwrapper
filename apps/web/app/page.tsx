import { SignInCard } from "@/components/sign-in-card";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="landing-grid absolute inset-0 opacity-100" />
      <div className="pointer-events-none absolute inset-0">
        <div className="landing-glow-left absolute left-[-14rem] top-[10%] h-[34rem] w-[34rem] rounded-full" />
        <div className="landing-glow-right absolute bottom-[-16rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_30%),linear-gradient(180deg,rgba(4,6,10,0.2),rgba(4,6,10,0.72))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
        <section className="flex flex-1 flex-col justify-between gap-12">
          <header className="space-y-5 pt-2 sm:space-y-6 lg:max-w-3xl lg:pt-6">
            <div className="space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.08em] text-foreground sm:text-6xl lg:text-7xl">
                totally-not-vercel
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Spin up append lists, invite contributors, and keep the feed
                moving with a control-room experience.
              </p>
            </div>
          </header>

          <div className="flex flex-1 items-center justify-center py-4 sm:py-8 lg:py-12">
            <SignInCard />
          </div>
        </section>
      </div>
    </main>
  );
}
