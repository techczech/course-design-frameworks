export interface ContentBlock {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'list' | 'link' | 'image' | 'blockquote';
  content: string | string[];
  url?: string;
  alt?: string;
}

export interface TableColumn {
  header: string;
  key: string;
  width?: string;
}

export interface TableRow {
  [key: string]: string | string[];
}

export interface MatrixData {
  columns: TableColumn[];
  rows: TableRow[];
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistCategory {
  title: string;
  items: ChecklistItem[];
}

export interface Section {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  type: 'text' | 'checklist' | 'matrix' | 'planner';
  data: ContentBlock[] | MatrixData | ChecklistCategory[];
}

export interface AppData {
  title: string;
  author: string;
  website: string;
  lastUpdated: string;
  sections: Section[];
}
