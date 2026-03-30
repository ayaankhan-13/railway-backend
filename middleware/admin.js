
// const signUp = async (req, res) => {
//       try{

//     const { username, email, password  } = req.body;
    

//     if (!username || !email || !password) {
//       return res.status(400).json({
//         isSuccessful: false,
//         message: "Please fill all the fields"
//       });
//     }

    
//    const existing = await CourseModel.findOne({ email });
//     if (existing) {
//       return res.status(409).json({
//         isSuccessful: false,
//         message: "User already exists"
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const Otp = Math.floor(100000 + Math.random() * 900000)
//     const user = await CourseModel.create({
//       username,
//       email,
//       password: hashedPassword,
//       verifyOtp: Otp,
//       OtpExpire: Date.now()+ 2*60*1000
//     });


    
//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({
//         isSuccessful: false,
//         message: "JWT secret is not set in .env"
//       });
//     }

//     const token = jwt.sign(
//       { id: user._id , role: user.role},
      
//       process.env.JWT_SECRET,
//       { expiresIn: "10d" }
//     );

// res.cookie("token", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production" ,          // HTTPS required in production
//   sameSite: process.env.NODE_ENV === "production"  ? "none" : "lax",  // cross-site cookie
//   maxAge: 10 * 24 * 60 * 60 * 1000       
// });




  

//     return res.status(201).json({
//       isSuccessful: true,
//       message: "Successfully Registered",
//      userId: user._id,
//      role: user.role
  
     
      

//     });

          
    
    
    
//   } catch (error) {
  
//     return res.status(500).json({
//       isSuccessful: false,
//       message: error.message
//     });
//   }
// };
