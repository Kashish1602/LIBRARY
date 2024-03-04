const User = require("../Model/userModel");
const Book = require("../Model/bookModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
  try {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userData.password, genSalt);

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res
        .status(401)
        .json({ errorMessage: "User is already registered" });
    }

    const userPass = {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role
    };

    let user = await User.create(userPass);
    console.log(user);
    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log(`Error in creating new user : ${error}`);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (role === "admin") {
      const user = await User.findOne({ email: email })
      const comparePass = await bcrypt.compare(password, user.password);

      if (user.role === "admin" && comparePass) {
        const token =  jwt.sign({_id:user._id,role:user.role},process.env.KEY,{expiresIn:"1h"})
        res.status(200).json({success:true,data:{user:user,token:token,role:user.role}})

      } else {
        res.status(400).send("invalid credential")
      }
    }
    else if (role === "student") {
      const user = await User.findOne({ email: email })
      const comparePass = await bcrypt.compare(password, user.password);

      if (user.role === "student" && comparePass) {
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.KEY, { expiresIn: "1h" });
        res.status(200).json({ success: true, data: { user: user, token: token, role: user.role } })
      } else {
        res.status(400).send("invalid credential")
      }
    }

  } catch (error) {
    console.log("Login Error : ", error);
    return res.status(500).json({ message: "Authentication failed" });
  };
}

const createBook = async (req, res) => {
  try {
    const { name, author, imgurl, desc } = req.body;

    if (!name || !author || !imgurl || !desc) {
      return res.status(400).json({ errorMessage: "All fields are required" });
    }

    const existingBook = await Book.findOne({ name });
    if (existingBook) {
      return res.status(401).json({ errorMessage: "Book already exists" });
    }

    const newBook = await Book.create({ name, author, imgurl, desc });
    console.log("New book created:", newBook);
    return res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    console.error("Error creating new book:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};


const getBook = async (req, res) => {
  try {
    const getBook = await Book.find();
    if (!getBook) {
      return res.status(400).send("No books to display");
    }
    res.status(200).json({ success: true, data: getBook });

  } catch (error) {
    console.log(error);
    res.status(500).send("errror : ", error)
  }
}


const specificBook = async (req, res) => {
  try {
    const { id } = req.params;
    const getBook = await Book.findById(id);
    if (!getBook) {
      return res.status(404).json({ success: false, message: "No book found with this ID" });
    }
    res.status(200).json({ success: true, data: getBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}


module.exports = {
  createUser,
  LoginUser,
  createBook,
  getBook,
  specificBook
}







































































