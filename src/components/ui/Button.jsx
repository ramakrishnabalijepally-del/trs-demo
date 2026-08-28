import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-brand-600 text-white shadow-[0_1px_2px_rgba(15,23,42,0.08),0_8px_20px_-10px_rgba(37,99,235,0.55)] hover:bg-brand-700 hover:shadow-[0_2px_4px_rgba(15,23,42,0.10),0_14px_28px_-12px_rgba(37,99,235,0.6)]",
  secondary:
    "bg-white text-slate-800 ring-1 ring-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:bg-slate-50 hover:ring-slate-300",
  ghost: "text-brand-700 hover:bg-brand-50",
  onDark:
    "bg-white text-brand-700 shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:bg-brand-50",
};

const sizes = {
  md: "h-11 px-5 text-[0.94rem]",
  lg: "h-[52px] px-7 text-[1rem]",
};

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-[background-color,box-shadow,transform] duration-200 ease-out active:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-60",
    styles[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(classes, "cursor-pointer")} {...rest}>
      {children}
    </button>
  );
}
