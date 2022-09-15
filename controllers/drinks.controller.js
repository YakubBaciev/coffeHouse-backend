const Drink = require('../models/Drink.model');

module.exports.drinkController = {
  getDrink: async(req,res) => {
  try{
    const drink = await Drink.find();
    res.json(drink);
  }catch(e){
    res.json({error: "Ошибка при выводе напитков"});
  }
  },
  getDrinkByInStock: async (req,res) => {
    try{
      const drink = await Drink.find({in_stock: true});
      res.json(drink);
    }catch(e){
      res.json({error: "Ошибка при выводе напитка"});
    }
  },
  getDrinkId: async (req,res) => {
    try{
      const drink = await Drink.findById(req.params.id);
      res.json(drink);
    }catch(e){
      res.json({error: "Ошибка при выводе напитка"});
    }
  },
  postDrink: async (req, res) => {
    try{
      const drink = await Drink.create({
        name: req.body.name,
        price: req.body.price,
        in_stock: req.body.in_stock,
        contains_caffeine: req.body.contains_caffeine,
        volume: req.body.volume,
        drink_description: req.body.drink_description,
      });
      res.json(drink);
    }catch(e){
      res.json({error: "Ошибка при добавлении напитка"});
    }
  },
  deleteDrink: async (req, res) => {
    try{
      const drink = await Drink.findByIdAndRemove(req.params.id);
      res.json(drink);
    }catch(e){
      res.json({error: "Ошибка при удалении напитка"});
    }
  },
  patchDrink: async (req,res) => {
    try{
      const drink = await Drink.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        in_stock: req.body.in_stock,
        contains_caffeine: req.body.contains_caffeine,
        volume: req.body.volume,
        drink_description: req.body.drink_description,
      });
      res.json(drink);
    }catch(e){
      res.json({error: "Ошибка при изменении напитка"});
    }
}
}