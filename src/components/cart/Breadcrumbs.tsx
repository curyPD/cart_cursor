import Image from "next/image";

export function Breadcrumbs() {
  return (
    <nav
      className="flex items-center gap-1.5 lg:gap-3"
      aria-label="Breadcrumb"
    >
      <div className="flex items-center gap-1">
        <a
          href="/"
          className="text-sm font-normal leading-normal text-muted whitespace-nowrap transition-colors hover:text-black focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:text-base"
        >
          Home
        </a>
        <div className="flex size-3.5 shrink-0 items-center justify-center lg:size-4">
          <Image
            src="/images/icon-chevron.svg"
            alt=""
            width={16}
            height={16}
            className="-rotate-90 size-full"
            aria-hidden
          />
        </div>
      </div>
      <span className="text-sm font-normal leading-normal text-black whitespace-nowrap lg:text-base">
        Cart
      </span>
    </nav>
  );
}
