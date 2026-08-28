import Button from "@/components/ui/Button";

/** Kept for compatibility with pages that imported the old action. */
export default function StampAction({ to, children, tone = "stamp", className }) {
  return (
    <Button to={to} variant={tone === "paper" ? "onDark" : "primary"} size="lg" className={className}>
      {children}
    </Button>
  );
}
