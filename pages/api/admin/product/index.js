import { createRouter } from "next-connect";
import Product from "../../../../models/Product";
import auth from "../../../../middleware/auth";
import admin from "../../../../middleware/admin";
import slugify from "slugify";
import { connectDb, disconnectDb } from "@/utils/db";

const router = createRouter().use(auth).use(admin);

router.post(async (req, res) => {
  try {
    await connectDb(); // Ensure the DB is connected
    console.log("Database connected");

    if (req.body.parent) {
      console.log("Creating a sub-product");
      const parent = await Product.findById(req.body.parent);
      if (!parent) {
        return res.status(400).json({
          message: "Parent product not found!",
        });
      } else {
        await parent.updateOne(
          {
            $push: {
              subProducts: {
                sku: req.body.sku,
                color: req.body.color,
                images: req.body.images,
                sizes: req.body.sizes,
                discount: req.body.discount,
              },
            },
          },
          { new: true }
        );
        console.log("Sub-product added successfully to parent");
        res.status(200).json({ message: "Sub-product added successfully." });
      }
    } else {
      console.log("Creating a new product");
      req.body.slug = slugify(req.body.name);
      const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        details: req.body.details,
        questions: req.body.questions,
        slug: req.body.slug,
        category: req.body.category,
        subCategories: req.body.subCategories,
        subProducts: [
          {
            sku: req.body.sku,
            color: req.body.color,
            images: req.body.images,
            sizes: req.body.sizes,
            discount: req.body.discount,
          },
        ],
      });
      await newProduct.save();
      console.log("Product created successfully");
      res.status(200).json({ message: "Product created successfully." });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: error.message });
  } finally {
    await disconnectDb(); // Always disconnect the DB
    console.log("Database disconnected");
  }
});

export default router.handler();
