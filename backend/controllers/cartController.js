import userModel from "../models/userModel.js";

// add to user cart  
const addToCart = async (req, res) => {
    try {
        const { itemId } = req.body;

        await userModel.findByIdAndUpdate(
            req.body.userId,
            {
                $inc: { [`cartData.${itemId}`]: 1 }
            }
        );

        res.json({ success: true, message: "Item Added" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// remove food from user cart
const removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.body;

        await userModel.findOneAndUpdate(
            {
                _id: req.body.userId,
                [`cartData.${itemId}`]: { $gt: 0 }
            },
            {
                $inc: { [`cartData.${itemId}`]: -1 }
            }
        );

        res.json({ success: true, message: "Item Removed" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// get user cart
const getCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = userData.cartData;
      res.json({ success: true, cartData });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
};

export { addToCart, removeFromCart, getCart };