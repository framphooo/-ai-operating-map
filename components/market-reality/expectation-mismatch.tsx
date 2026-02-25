"use client";

import SectionReveal from "../learning/SectionReveal";

const EXPECTATION_COLOR = "#556b64"; // muted green-gray
const ACTUAL_COLOR = "#1bc4a6"; // teal accent
const BAR_BG = "#d9dddb"; // light gray baseline

function SegmentBar({
  expected,
  actual,
  actualLabel,
  expectedLabel,
}: {
  expected: number;
  actual: number;
  actualLabel?: string;
  expectedLabel?: string;
}) {
  const background = `linear-gradient(to right,
    ${ACTUAL_COLOR} 0%,
    ${ACTUAL_COLOR} ${actual}%,
    ${EXPECTATION_COLOR} ${actual}%,
    ${EXPECTATION_COLOR} ${expected}%,
    ${BAR_BG} ${expected}%,
    ${BAR_BG} 100%)`;

  const actualPos = actual / 2;
  const expectedPos = actual + (expected - actual) / 2;

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative h-10 rounded-md overflow-hidden shadow-sm"
        style={{ background }}
        aria-hidden
      >
        <span
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-semibold text-white drop-shadow-sm"
          style={{ left: `${actualPos}%` }}
        >
          {actualLabel ?? `${actual}%`}
        </span>
        <span
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-semibold text-white drop-shadow-sm"
          style={{ left: `${expectedPos}%` }}
        >
          {expectedLabel ?? `${expected}%`}
        </span>
      </div>
    </div>
  );
}

export default function ExpectationMismatch() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight">
              The ROI Gap - Enterprise AI
            </h2>

            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-4 w-4 rounded-sm"
                  style={{ backgroundColor: EXPECTATION_COLOR }}
                />
                <span>Expectation</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-4 w-4 rounded-sm"
                  style={{ backgroundColor: ACTUAL_COLOR }}
                />
                <span>Actuals</span>
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <SectionReveal delay={0.1}>
            <div className="flex flex-col items-center text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                Revenue Growth
              </h3>

              <SegmentBar expected={51} actual={19} />

              <p className="text-base leading-relaxed text-foreground/80 max-w-md">
                Many organizations expect AI to drive top-line growth, but only a
                fraction have realized measurable revenue impact – mainly
                because{" "}
                <span className="font-semibold text-foreground">
                  most pilots remain isolated, lack integration with P&amp;L
                  metrics, and fail to reach production scale.
                </span>
              </p>

              <div className="text-sm text-foreground/60">
                <div>Source: McKinsey &amp; Company</div>
                <a
                  href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                  className="text-primary underline underline-offset-4 font-medium"
                >
                  Link
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-col items-center text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                Cost Reduction next 18 months
              </h3>

              <SegmentBar expected={90} actual={20} actualLabel="<20%" />

              <p className="text-base leading-relaxed text-foreground/80 max-w-md">
                While AI promises operational efficiency, most companies remain
                in early stages of cost realization due to{" "}
                <span className="font-semibold text-foreground">
                  fragmented data, weak governance, and low cross-functional
                  adoption.
                </span>
              </p>

              <div className="text-sm text-foreground/60">
                <div>Source: Boston Consulting Group</div>
                <a
                  href="https://docs.google.com/presentation/d/1-UsPTZsk1XIge6l2k2ne3DZ_4ML1lj813R1WOa3UTgY/edit?slide=id.g39b343267ec_0_2460#slide=id.g39b343267ec_0_2460"
                  className="text-primary underline underline-offset-4 font-medium"
                >
                  Link
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
