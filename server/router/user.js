module.exports = app =>{
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
app.post('/users/:email', async (req, res) => {
  const email = req.params.email
  try {
    const userWithAchat = await prisma.user.findUnique({
      where: { email: email },
      include: {
        Achat: true,
      },
    });
    res.status(200).send({ status: 'success', data: userWithAchat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
  }
});



}

