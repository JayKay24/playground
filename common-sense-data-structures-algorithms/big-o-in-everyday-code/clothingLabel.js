function markInventory(clothingItems) {
  const clothingOptions = [];
  
  for (const item of clothingItems) {
      for (let i = 1; i < 6; i++) {
          const labelText = `${item} Size: ${i}`;
          clothingOptions.push(labelText);
        }
    }
  
  return clothingOptions;
}
markInventory(["Purple Shirt", "Green Shirt"]);