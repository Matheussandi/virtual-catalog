import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type RequiredLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

export function RequiredLabel({ htmlFor, children, className }: RequiredLabelProps) {
  return (
    <Label htmlFor={htmlFor} className={cn(className)}>
      {children}
      <span className="text-destructive" aria-hidden="true">
        {" "}
        *
      </span>
      <span className="sr-only"> (obrigatório)</span>
    </Label>
  );
}
