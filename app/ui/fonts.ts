import { Lusitana, Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});
// So what does the weight do?, well lets see

// Importing a font and a loading a subset, in this case Latin.

// Practice by importing another font