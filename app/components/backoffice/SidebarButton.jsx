import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SidebarButton({ icon, className, children }) {
  return (
    <Button variant='ghost' className={[cn('gap-2 justify-start'), className]}>
      {icon}{children}
    </Button>
  )
}