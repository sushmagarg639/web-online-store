import type { StoreItemProps } from '../types/global.types';

export const generateStoreItems = (): StoreItemProps[] => {
  const items = [];

  for (let i = 1; i <= 20; i++) {
    const productNames = [
      'pencil-box',
      'schoolbag-orange',
      'notepad',
      'lunchbox',
      'holder',
      'pencil-color',
      'sticky-notes',
      'water-bottle',
      'watercolor',
      'pencilcolor-holder-combo',
      'geometry-box',
      'watercolor-notepad-combo',
      'notepad-brown',
      'lcd-writing-tablet',
      'notebook-orange',
      'magic-slate',
      'glue-gun',
      'unicorn-exam-pad',
      'ball-pen-set',
    ];
    // generate random price between 10.00-100.00
    const suggestedPrice = (Math.random() * 90 + 10).toFixed(2);
    const actualPrice = (parseFloat(suggestedPrice) * (Math.random() * 0.4 + 0.2)).toFixed(2);
    items.push({
      id: i.toString(),
      name: productNames[i] ?? `Item ${i}`,
      description: `This is description of item ${productNames[i] ?? i} with dummy content.`,
      suggestedPrice,
      actualPrice,
      image: productNames[i] ? `images/${productNames[i]}.jpg` : 'images/placeholder.jpg',
    });
  }

  return items;
};
