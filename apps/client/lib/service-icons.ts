import {
  Award,
  CheckCircle,
  Clock,
  FileText,
  Headphones,
  type LucideIcon,
  Radio,
  Shield,
  Ship,
  Users,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Award,
  Radio,
  FileText,
  Headphones,
  Ship,
  CheckCircle,
  Clock,
  Users,
  Zap,
};

export function getServiceIcon(iconName: string) {
  return ICON_MAP[iconName] || Shield;
}
