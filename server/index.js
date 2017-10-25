import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('YOU ARE SO IN THERE');
});

app.listen(PORT, function() {
  console.log('Netflix Clone Started!');
})
