import type { ProjectCategory } from "../types/project-category";
import DesignIcon from "../assets/icons/design-icon.svg";
import FrontendIcon from "../assets/icons/frontend-icon.svg";
import BackendIcon from "../assets/icons/backend-icon.svg";

export const projectCategories: ProjectCategory[] = [
  {
    id: "design",
    title: "DESIGN",
    illustration: DesignIcon,
    description: "Figma, UX-аналитика, прототипы",
  },
  {
    id: "frontend",
    title: "FRONTEND",
    illustration: FrontendIcon,
    description: "React/Vue, верстка, логика клиента",
  },
  {
    id: "backend",
    title: "BACKEND",
    illustration: BackendIcon,
    description: "Node/Python, БД, серверная логика",
  },
];
