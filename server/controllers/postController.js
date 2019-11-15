module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const posts = await db.get_posts()
    res.status(200).send(posts)
  }
}