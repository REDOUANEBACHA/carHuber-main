module.exports = app =>{
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
app.post('/users/:email', async (req, res) => {
  const email = req.params.email
  try {
    const userWithAchat = await prisma.user.findUnique({
      where: { email: email },
      include: {
        Achat: {
          include: {
            produit: true,
          },
        },
      },
    });
    res.status(200).send({ status: 'success', data: userWithAchat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
  }
});

app.post('/users/achat/:id', async (req, res) => {
  const id = parseInt(req.params.id,30)
  try {
    const userWithAchat = await prisma.user.findUnique({
      where: { id: id},
      include: {
        Achat: {
          include: {
            produit: true,
          },
        },
      },
    });
    res.status(200).send({ status: 'success', data: userWithAchat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
  }
});

}

