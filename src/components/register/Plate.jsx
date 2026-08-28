import { cn } from "@/lib/utils";

/** An image with an optional caption. */
export default function Plate({ src, caption, className, imgClassName }) {
  return (
    <figure className={cn("m-0", className)}>
      <img
        src={src}
        alt={caption ?? ""}
        className={cn(
          "block w-full rounded-[var(--radius-card)] object-cover shadow-[var(--shadow-card)]",
          imgClassName,
        )}
      />
      {caption && <figcaption className="mt-3 text-[0.85rem] text-slate-500">{caption}</figcaption>}
    </figure>
  );
}
