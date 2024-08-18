interface newcountrie {
  value: string;
  label: string;
}
interface countrie {
  name: string;
  code: string;
}
export function getListOfCountrie(arr: countrie[]) {
  const list: newcountrie[] = [];
  arr.forEach((countrie: countrie) => {
    list.push({ value: countrie.name.toLowerCase(), label: countrie.name });
  });
  return list;
}
