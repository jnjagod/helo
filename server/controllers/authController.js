module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    const found = await db.find_user([username])
    if (+found[0].count !== 0) {
      return res.status(409).send({ message: 'Username unavailable.' })
    }
    const user = await db.add_user({ username, password, profile_pic: `https://robohash.org/${username}` })
    res.status(201).send(user[0])
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    const found = await db.find_user([username])
    if (+found[0].count === 0) {
      return res.status(401).send({ message: 'Username not registered.' })
    }
    const pass = await db.find_password([username])
    if (pass[0].password !== password) {
      return res.status(403).send({ message: 'Incorrect password.' })
    }
    const foundUser = await db.get_user([username])
    res.status(200).send(foundUser[0])
  },
  // logout: (req, res) => {
  //   req.session.destroy()
  //   res.status(200).send({message: 'Logged out.'})
  // }
}