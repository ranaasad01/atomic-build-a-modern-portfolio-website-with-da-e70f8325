export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

export const brandName = "Alex Mercer";
export const brandInitials = "AM";
export const brandTagline = "Creative Developer";
export const brandEmail = "hello@alexmercer.dev";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];