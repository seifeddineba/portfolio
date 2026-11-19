interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <span className="inline-flex select-none items-center whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[11px] font-medium leading-none text-primary">
      {content}
    </span>
  );
}
