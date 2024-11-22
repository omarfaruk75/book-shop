import config from './config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(    config.database_url);
    app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
