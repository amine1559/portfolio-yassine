import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChartColumn,
  Clapperboard,
  Compass,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  PenLine,
  Phone,
  ScrollText,
  Share2,
  ShoppingBag,
  Sun,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/portfolio";

const icons: Record<IconName, LucideIcon> = {
  megaphone: Megaphone,
  users: Users,
  chart: ChartColumn,
  clapperboard: Clapperboard,
  share: Share2,
  compass: Compass,
  pen: PenLine,
  palette: Palette,
  bag: ShoppingBag,
  scroll: ScrollText,
  graduation: GraduationCap,
  mail: Mail,
  phone: Phone,
  map: MapPin,
  message: MessageCircle,
  download: Download,
  moon: Moon,
  sun: Sun,
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
