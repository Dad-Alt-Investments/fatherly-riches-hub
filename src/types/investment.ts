export interface Article {
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  content?: string; // Optional if we fetch it separately
  date?: string;
}

export interface Category {
  id: string; // The slug, e.g., 'stocks-etfs'
  name: string; // Display name
  description?: string;
}

export interface ImageMetadata {
  fileName: string;
  altText: string;
  caption: string;
}
