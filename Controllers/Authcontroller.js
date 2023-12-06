import UserModals from "../Modals/User.Modals.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const Login = async (req, res) => {
  try {

    const { email, password } = req.body.data
    if (!email || !password) return res.status(401).json({ success: false, message: "All fields are mandatory" })

    const user = await UserModals.findOne({ email: email })

    if (!user) return res.status(401).json({ success: false, message: "Email is wrong.." });

    const isPasscorrect = await bcrypt.compare(password, user.password)
    // console.log(isPasscorrect, "check here")
    if (!isPasscorrect) {
      return res.status(401).json({ success: false, message: "Password is wrong." })
    }
    // generate token

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    return res.status(200).json({ success: true, message: "Login successfull.", user: { name: user.name, id: user._id }, token })







  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
export const Register = async (req, res) => {
  // res.send("Hello from register")
  try {
    const { name, email, password } = req.body.data

    if (!name || !email || !password) return res.status(401).json({ success: false, message: "All fields are mandatory" })

    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword);

    const user = new UserModals({
      name: name,
      email,
      password: hashedPassword
    })

    await user.save();

    return res.status(201).json({ success: true, message: "Registration successfull" })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}