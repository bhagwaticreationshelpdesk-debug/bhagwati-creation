import product1 from '../assets/product1.png';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import orangeFloralSuit from '../assets/orange_floral_suit.png';

export const products = [
    {
        id: 1,
        name: "Peach Floral Anarkali Set",
        category: "Suit Set",
        price: "₹2,499",
        originalPrice: "₹4,999",
        tag: "Best Seller",
        image: product1,
        description: "Elegant peach floral Anarkali set crafted from premium cotton. Features intricate floral prints, a flared silhouette, and a matching bright dupatta. Perfect for festive occasions and comfortable enough for all-day wear.",
        stock: 15,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        name: "Teal Embroidered Kurta",
        category: "Kurta",
        price: "₹1,899",
        originalPrice: "₹2,599",
        image: product2,
        description: "Stunning teal kurta with gold thread embroidery. Made from soft silk blend fabric. Pair it with beige leggings or palazzos for a complete ethnic look.",
        stock: 0,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Ivory Cotton Maxi Dress",
        category: "Dresses",
        price: "₹2,100",
        tag: "New",
        image: product3,
        description: "Breezy ivory cotton maxi dress with minimal detailing. Ideal for summer outings or casual gatherings. Breathable fabric and relaxed fit.",
        stock: 20,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Lavender Embroidered Co-ord Set",
        category: "Co-ords",
        price: "₹2,599",
        originalPrice: "₹3,999",
        image: product4,
        description: "Chic lavender co-ord set featuring a crop top and high-waisted trousers. Adorned with delicate embroidery, this set is a perfect blend of modern style and traditional elegance.",
        stock: 2,
        sizes: ["S", "M", "L"]
    },
    {
        id: 5,
        name: "Maroon Silk Sharara Set",
        category: "Suit Set",
        price: "₹3,599",
        originalPrice: "₹6,000",
        tag: "Sale",
        image: product5,
        description: "Luxurious maroon silk sharara set with heavy embroidery work. Includes a short kurta, flared sharara pants, and a net dupatta. A showstopper for weddings.",
        stock: 8,
        sizes: ["M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        name: "Indigo Block Print Co-ord",
        category: "Co-ords",
        price: "₹1,599",
        image: product6,
        description: "Contemporary indigo block print co-ord set. Stylish and comfortable, perfect for office wear or casual day outs. Made from 100% cotton.",
        stock: 12,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: "Rose Pink Georgette Saree",
        category: "Saree",
        price: "₹2,899",
        tag: "Trending",
        image: product7,
        description: "Graceful rose pink georgette saree with a subtle sheen. Lightweight and easy to drape. Comes with a matching unstitched blouse piece.",
        stock: 5,
        sizes: ["Free Size"]
    },
    {
        id: 8,
        name: "Mustard Palazzo Set",
        category: "Suit Set",
        price: "₹1,999",
        originalPrice: "₹3,499",
        image: product8,
        description: "Vibrant mustard palazzo set. Features a straight cut kurta and wide-legged palazzos. A classic ensemble for any traditional event.",
        stock: 10,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 9,
        name: "Cotton Daily Wear Kurti",
        category: "Kurta",
        price: "₹899",
        originalPrice: "₹1,299",
        tag: "Bestseller",
        image: product2, // Reusing image for demo
        description: "Soft cotton kurti perfect for daily wear. Breathable fabric with minimal print.",
        stock: 25,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 10,
        name: "Printed Scarf",
        category: "Accessories",
        price: "₹499",
        image: product6, // Reusing image
        description: "Lightweight printed scarf to accessorize your ethnic look.",
        stock: 50,
        sizes: ["Free Size"]
    },
    {
        id: 11,
        name: "Basic Leggings",
        category: "Bottoms",
        price: "₹699",
        image: product8, // Reusing image
        description: "Comfortable cotton lycra leggings available in multiple colors.",
        stock: 100,
        sizes: ["M", "L", "XL"]
    },
    {
        id: 12,
        name: "Ethnic Oxidized Earrings",
        category: "Jewelry",
        price: "₹299",
        originalPrice: "₹599",
        tag: "Trending",
        image: product4, // Reusing image
        description: "Beautiful oxidized silver earrings to match your traditional outfits.",
        stock: 30,
        sizes: ["Free Size"]
    },
    {
        id: 13,
        name: "Orange Floral Designer Suit",
        category: "Suit Set",
        price: "₹3,299",
        originalPrice: "₹4,999",
        tag: "New Arrival",
        image: orangeFloralSuit,
        description: "Vibrant orange floral print designer suit featuring intricate mirror work embellishments on the neckline. The set includes a stylized kurta with bell sleeves and matching printed pants, crafted from premium fabric for a luxurious feel. Perfect for festive celebrations and special occasions.",
        stock: 10,
        sizes: ["S", "M", "L", "XL", "XXL"]
    }
];
