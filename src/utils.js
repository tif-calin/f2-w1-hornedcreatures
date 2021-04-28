export function getUniquePropList(arr, prop) {
  const arrProps = [];
  
  arr.forEach(obj => {
    if (!arrProps.includes(obj[prop])) arrProps.push(obj[prop]);
  });

  return arrProps;
}