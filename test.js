import {
  Categories,
  Options,
  subCategories,
} from "./Model/associations.Model.js";

(async () => {
  const res = await Categories.findAll({
    include: {
      model: subCategories,
      include: Options,
    },
  });
  // console.log(res);
  res.forEach((category) => {
    console.log(`Category: ${category.category_id}`);
    category.subCategories.forEach((subCategory) => {
      console.log(`  SubCategory: ${subCategory.subCategory_id}`);
      subCategory.Options.forEach((option) => {
        console.log(`    Option: ${option.option_id}`);
      });
    });
  });
})();
