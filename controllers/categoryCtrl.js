const Category = require('../models/categoryModel')
const Products = require('../models/productModel')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
            // Если у пользователя role = 1 ---> admin
            // Только администратор может создавать, удалять и обновлять категорию
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "Эта категория уже существует."})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: "Категория создана"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCategory: async(req, res) =>{
        try {
            const products = await Products.findOne({category: req.params.id})
            if(products) return res.status(400).json({
                msg: "Пожалуйста, удалите все продукты."
            })

            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Категория удалена"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Категория обновлена"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = categoryCtrl