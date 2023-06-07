const transferListHelper = (data) => {
  const temp = data.map((item) => ({
    label: item,
    value: item
  }));
  console.log('transfer', temp);
  return temp;
};

export const convertIntoArray = (arrayOfObjects) => {
  if (arrayOfObjects[0].hasOwnProperty('name') || arrayOfObjects[0].hasOwnProperty('label')) {
    const temp = [];
    arrayOfObjects.forEach((item) => {
      temp.push(item.label);
    });
    return temp;
  }
  return arrayOfObjects;
};

export default transferListHelper;
