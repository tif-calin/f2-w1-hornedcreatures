export function getUniquePropList(arr, prop) {
  const arrProps = [];

  arr.forEach(obj => {
    obj[prop].forEach(str => {
      if (!arrProps.includes(str)) arrProps.push(str);
    });
  });

  return arrProps;
}