module.exports = app =>{
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    res.status(200).send({ status: 'success', data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des catégories.' });
  }
});
  
app.get('/menucategories', async (req, res) => {
  try {
    const menuCategories = await prisma.menucategorie.findMany({
      include: {
        Categorie: true,
      },
    });
    res.status(200).send({ status: 'success', data: menuCategories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des menucategories.' });
  }
});

  }
  
  