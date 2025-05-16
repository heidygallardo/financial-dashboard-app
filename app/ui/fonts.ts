/* file to keep the fontas that will be used throughout the app*/

import { Inter, Lusitana } from 'next/font/google'; 

export const inter = Inter({subsets: ['latin']}); 
export const lusitana = Lusitana({
    subsets: ['latin'], 
    weight: ['400', '700']
});