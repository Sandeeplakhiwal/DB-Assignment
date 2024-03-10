<!-- Ans 1. => -->

In the provided db diagram, there is a relationship between the "Product" and "Product_Category" entities.

This relationship is represented by a foreign key constraint in the "Product" table that references the primary key of the "Product_category" table.

Here's a breakdown of the relationship:

- In the "Product" table:

  - The column "category_id" serves as a foreign key that references the "id" column of the "Product_category" table.

  - This foreign key establishes a relationship between each product and its corresponding category.

  - It means that each product in the "Product" table is associated with a specific category defined in the "Product_category" table.

- In the "Product_category" table:
  - The "id" column serves as the primary key, uniquely identifying each category.
  - The "Product" table references this primary key through the foreign key constraint.

The relationship between the "Product" and "Product_Category" entities is a one-to-many relationship, where each product belongs to one category, and each category can have multiple products associated with it.

<!-- Ans 2. => -->

To ensure that each product in the "Product" table has a valid category assigned to it,
we can enforce referential integrity using foreign key constraints.
Foreign key constraints ensure that the value stored in the referencing column (in this case, "category_id" in the "Product" table) matches a value in the referenced column (the "id" column of the "Product_category" table).

To ensure it I added a custom exception in createNewProduct service
catch (error) {
// if the error is related to foreign key constraint failure
if (error.code === 'P2002') {
throw new NotFoundException(
'Invalid category ID. Product category does not exist.',
);
}
throw error;
}

here 'P2002' is Prisma error code for constraint failure

<!-- Ans 3. => -->

The schema for the given db diagram is in the file migration.sql which path is "./prisma/migration/migration.sql

<!-- I have also added some apis to create new product, category, inventory and discounts -->
<!-- Here I am using NEST framework for backend development and postgres and prisma for database handling  -->

here are the apis:-

1. To create a new product : POST
   http://localhost:5000/product/newproduct

required json: {name, desc, SKU, price, discount_id, category_id, inventory_id}

2. To create a new category : POST
   http://localhost:5000/category/newcategory

required json: {name, desc}

3. To create a new inventory : POST
   http://localhost:5000/inventory/newinventory

required json: {quantity}

4. To create a new discount: POST
   http://localhost:5000/discount/newdiscount

required json: {name, desc, discount_percent, active}

<!-- Also ensure to create .env file root folder and put there your DATABASE_URL -->
