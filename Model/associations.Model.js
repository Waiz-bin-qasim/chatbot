import { Categories } from "./categories.Model.js";
import { Options } from "./options.Model.js";
import { subCategories } from "./subCategories.Model.js";

Categories.hasMany(subCategories, {
  foreignKey: {
    name: "category_id",
    as: "options",
  },
});
subCategories.belongsTo(Categories);

subCategories.hasMany(Options, {
  foreignKey: {
    name: "subCategory_id",
    as: "options",
  },
});
Options.belongsTo(subCategories);

export { Categories, subCategories, Options };
