import { createRouter } from "next-connect";
import Product from "../../../../models/Product";
import { connectDb, disconnectDb } from "../../../../utils/db";

const router = createRouter();

router.get(async (req, res) => {
  try {
    connectDb();
    const id = req.query.id;
    const style = req.query.style || 0;
    const size = req.query.size || 0;
    const product = await Product.findById(id).lean();
    let discount = product.subProducts[style].discount;
    let priceBefore = product.subProducts[style].sizes[size].price;
    let price = discount ? priceBefore - priceBefore / discount : priceBefore;

    disconnectDb();

    return res.json({
      _id: product._id,
      style: Number(style),
      name: product.name,
      description: product.description,
      slug: product.slug,
      sku: product.subProducts[style].sku,
      brand: product.brand,
      category: product.category,
      subCategories: product.subCategories,
      shipping: product.shipping,
      images: product.subProducts[style].images,
      color: product.subProducts[style].color,
      size: product.subProducts[style].sizes[size].size,
      price,
      priceBefore,
      quantity: product.subProducts[style].sizes[size].qty,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete(async (req, res) => {
  try {
    connectDb();
    const id = req.query.id;

    // Implement the logic to delete the product by ID
    await Product.findByIdAndDelete(id);

    disconnectDb();

    res.status(204).end(); // Successfully deleted
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router.handler();
