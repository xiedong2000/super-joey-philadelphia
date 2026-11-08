export function CommunitySupportAcknowledgment() {
  return (
    <div className="mt-8 rounded-3xl border border-[#f4bd32]/60 bg-gradient-to-br from-[#eaf6ff] via-[#fff8e8] to-[#ecf9f5] p-6 shadow-[0_18px_32px_-24px_rgba(22,48,68,0.35)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-3 w-3 rounded-full bg-[#f4bd32]" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-[#176b67]">
          We Are Grateful for Our Community Partners
        </h3>
      </div>
      <p className="mt-3 text-lg leading-8 text-[#1d3b4f]">
        Their generosity, encouragement, and support make our mission possible and help us bring comfort and joy to families facing childhood cancer.
      </p>
      <ul className="mt-5 space-y-3 text-lg leading-8 text-[#1d3b4f]">
        <li>
          <a
            className="font-medium underline decoration-[#f4bd32] decoration-2 underline-offset-4 transition hover:text-[#176b67]"
            href="https://www.delawarevalleytennisclub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Delaware Valley Tennis Club
          </a>
        </li>
        <li>
          <a
            className="font-medium underline decoration-[#f4bd32] decoration-2 underline-offset-4 transition hover:text-[#176b67]"
            href="https://www.pvccc.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peace Valley Chinese Christian Church
          </a>
        </li>
        <li>
          <a
            className="font-medium underline decoration-[#f4bd32] decoration-2 underline-offset-4 transition hover:text-[#176b67]"
            href="https://www.matsusushipa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matsu Sushi and Ramen Inc.
          </a>
        </li>
        <li>
          <a
            className="font-medium underline decoration-[#f4bd32] decoration-2 underline-offset-4 transition hover:text-[#176b67]"
            href="https://www.homes.com/real-estate-agents/zhan-su/gtvqz3z/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Longlong Zhan Real Estate Investment LLC.
          </a>
        </li>
      </ul>
    </div>
  );
}
