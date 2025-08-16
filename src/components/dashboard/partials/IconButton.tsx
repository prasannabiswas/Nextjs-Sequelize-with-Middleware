import Tooltip from "./Tooltip";

const IconButton = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <Tooltip side="bottom" content={label}>
      <button
        aria-label={label}
        className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background/70 text-foreground hover:bg-accent hover:text-accent-foreground"
      >
        {children}
      </button>
    </Tooltip>
  );
}

export default IconButton;