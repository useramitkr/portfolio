import { ReactNode } from "react";

export interface wrapp {
  children: ReactNode;
}

export interface FaqItem {
    question: string;
    answer: string;
    id: number;
}