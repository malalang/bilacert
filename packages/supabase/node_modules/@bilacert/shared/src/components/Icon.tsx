"use client";

import {
  Award,
  BarChart,
  Book,
  Briefcase,
  Check,
  CheckSquare,
  Clock,
  CreditCard,
  DollarSign,
  FileSpreadsheet,
  FileText,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  type LucideIcon,
  type LucideProps,
  MessageSquare,
  Package,
  Radio,
  Sailboat,
  Settings,
  Shield,
  Ship,
  User,
  Users,
} from "lucide-react";

export const iconMap: { [key: string]: LucideIcon } = {
  Shield,
  CheckSquare,
  FileText,
  Radio,
  Sailboat,
  Ship,
  Package,
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Users,
  FileSpreadsheet,
  Settings,
  User,
  CreditCard,
  DollarSign,
  BarChart,
  Clock,
  Book,
  Check,
  Award,
  Headphones,
};

interface IconProps extends LucideProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  if (!name) {
    return <HelpCircle {...props} />;
  }
  const LucideIcon = iconMap[name.charAt(0).toUpperCase() + name.slice(1)];

  if (!LucideIcon) {
    return <HelpCircle {...props} />; // A default fallback icon for unknown names
  }

  return <LucideIcon {...props} />;
};

export default Icon;
