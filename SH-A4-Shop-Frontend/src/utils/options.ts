import { useGetAllBooksQuery } from "../redux/features/bookManagement/bookApi";
import { TBook } from "../types/TBook";

export const options: string[] = [];
const { data: Books } = useGetAllBooksQuery([
  { name: "brand", value: "No Starch Press" },
]);

Books.forEach((book: TBook) => {
  if (!options.includes(book.brand)) {
    options.push(book.brand);
  }
});

console.log(options)
