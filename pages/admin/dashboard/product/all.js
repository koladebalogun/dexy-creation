import {useState} from "react"
import styles from "../../../../styles/products.module.scss";
import Layout from "../../../../components/admin/layout";
import { connectDb, disconnectDb } from "../../../../utils/db";
import Product from "../../../../models/Product";
import Category from "../../../../models/Category";
import ProductCard from "../../../../components/admin/products/productCard";


export default function all({ products }) {
  const [prod, setProd] = useState(products);

  const handleDelete = (productId) => {
    // Implement your delete logic here
    console.log(`Deleting product with ID: ${productId}`);
    // Update the state or perform other actions as needed
    // For example, you might want to remove the deleted product from the products array
    setProd((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  return (
    <Layout>
      <div className={styles.header}>All Products</div>
      {prod.map((product) => (
        <ProductCard product={product} key={product._id} onDelete={handleDelete} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  await connectDb();
  const products = await Product.find({})
    .populate({ path: "category", model: Category })
    .sort({ createdAt: -1 })
    .lean();
  await disconnectDb();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
