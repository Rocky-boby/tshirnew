const productdata = [
    {
        id: 1,
        title: 'product1',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc",
        size:'m',
        color:'red'
    },
    {
        id: 2,
        title: 'product2',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc1",
        size:'m',
        color:'pink'
    },
    {
        id: 3,
        title: 'product3',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc2",
        size:'m',
        color:'white'
    },
    {
        id: 4,
        title: 'product4',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc3",
        size:'m',
        color:'b;ack'
    },
    {
        id: 5,
        title: 'product5',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc4",
        size:'m',
        color:'yellow'
    },
    {
        id: 6,
        title: 'product6',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc5",
        size:'m',
        color:'green'
    },
    {
        id: 7,
        title: 'product7',
        image: 'pd.png',
        price: 500,
        quantity: 1,
        slug: "qbc6",
        size:'m',
        color:'blue'
    },
];

export function getProductsBySlug(slug) {
    return productdata.filter(product => product.slug === slug);
}

export default productdata;
