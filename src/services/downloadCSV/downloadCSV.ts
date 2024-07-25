import { card, cardToCSV } from 'src/assets/types/types';
import { Parser } from '@json2csv/plainjs';

function getCheckedProducts(
  allProd: card[],
  arrCheckedID: number[]
): cardToCSV[] {
  const res: cardToCSV[] = [];
  for (let index = 0; index < arrCheckedID.length; index++) {
    const checkedID = arrCheckedID[index];
    allProd.forEach((product) => {
      if (product.id === checkedID) {
        res.push({
          category: product.category,
          raiting: product.raiting,
          title: product.title,
          text: product.text,
          price: product.price,
        });
      }
    });
  }
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
const download = (csv: string | undefined, arrCheckedID: number[]) => {
  // Create a Blob with the CSV data and type
  const blob = new Blob([csv as string], { type: 'text/csv' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an anchor tag for downloading
  const a = document.createElement('a');

  // Set the URL and download attribute of the anchor tag
  a.href = url;
  a.download = `${arrCheckedID.length}_products.csv`;

  // Trigger the download by clicking the anchor tag
  a.click();
};
export function toCsv(allProd: card[], arrCheckedID: number[]) {
  const data = getCheckedProducts(allProd, arrCheckedID);
  const csv = json2csv(data);
  download(csv, arrCheckedID);
}
