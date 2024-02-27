import app from './app';

const port = 3000;
// const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
