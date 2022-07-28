export const tableConfig = [
  {
    id: 'images',
    title: 'Image',
    sortable: false,
    template: (data: Array<{ url: string }>) => // in this case we can return without curly braces and return statement
      `<img class="sortable-table-image" alt="product image" src="${data[0].url}" />`
  },
  {
    id: 'rating',
    title: 'rating',
    sortable: true,
    sortType: 'number'
  },
  {
    id: 'price',
    title: 'Price',
    sortable: true,
    sortType: 'number'
  },
  {
    id: 'title',
    title: 'Title',
    sortable: true,
    sortType: 'string',
  },
  {
    id: 'description',
    title: 'Description',
    sortable: true,
    sortType: 'string',
    template: (data: string) => data.slice(0, 50) + '...' // in this case we can return without curly braces and return statement
  }
];
