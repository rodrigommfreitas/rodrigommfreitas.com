import { Example } from "./sections/examples";

export function ExampleCard({ example }: { example: Example }) {
  return (
    <article className="hover:animate-background w-full rounded-xl bg-white bg-gradient-to-r from-cyan-200 via-blue-500 to-blue-300 p-0.5 shadow-sm transition hover:bg-[length:400%_400%] hover:[animation-duration:_4s]">
      <div className="flex h-full items-center gap-6 rounded-[10px] bg-white p-4 dark:bg-zinc-950 sm:p-6">
        <div className="hidden sm:block md:hidden lg:block">{example.icon}</div>
        <div>
          <div className="flex items-center gap-4">
            <div className="sm:hidden md:block lg:hidden">{example.icon}</div>
            <h3 className="text-start text-xl !font-semibold md:text-2xl">
              {example.title}
            </h3>
          </div>

          <p className="text-color mt-3">{example.description}</p>
        </div>
      </div>
    </article>
  );
}
