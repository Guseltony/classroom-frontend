import { Subject } from "@/types";

export const DEPARTMENTS = ["CS", "Math", "PHYS", "BMS"];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description:
      "Foundational course covering programming fundamentals, algorithms, and computational thinking for beginners.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description:
      "Study of vectors, matrices, eigenvalues, and applications in various fields of science and engineering.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS301",
    name: "Quantum Physics",
    department: "PHYS",
    description:
      "Advanced course exploring the principles of quantum theory, wave functions, and subatomic particle behavior.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "ANA301",
    name: "HUman Histology",
    department: "BMS",
    description:
      "Understanding the human structure from the lowest level the cells tothe highest.",
    createdAt: new Date().toISOString(),
  },
];
