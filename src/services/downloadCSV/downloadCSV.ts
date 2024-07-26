import { card, cardToCSV } from 'src/assets/types/types';
import { Parser } from '@json2csv/plainjs';

function getCheckedProducts(checkedCards: card[]): cardToCSV[] {
  const res: cardToCSV[] = [];

  checkedCards.forEach((product) => {
    res.push({
      category: product.category,
      raiting: product.raiting,
      title: product.title,
      text: product.text,
      price: product.price,
    });
  });
  return res;
}

function json2csv(data: cardToCSV[]) {
  try {
    const opts = {};
    const parser = new Parser(opts);
    const csv = parser.parse(data);
    return csv;
  } catch (err) {
    console.error(err);
  }
}
// Function to download the CSV fileBlobPart
const download = (csv: string | undefined, checkedCards: card[]) => {
  // Create a Blob with the CSV data and type
  const blob = new Blob([csv as string], { type: 'text/csv' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an anchor tag for downloading
  const a = document.createElement('a');

  // Set the URL and download attribute of the anchor tag
  a.href = url;
  a.download = `${checkedCards.length}_products.csv`;

  // Trigger the download by clicking the anchor tag
  a.click();
};
export function toCsv(checkedCards: card[]) {
  const data = getCheckedProducts(checkedCards);
  const csv = json2csv(data);
  download(csv, checkedCards);
}
