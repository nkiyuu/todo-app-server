import * as express from 'express';
import * as Datastore from '@google-cloud/datastore';

const app: express.Application = express();
const router: express.Router = express.Router();

const datastore: Datastore = Datastore(); 

router.get('/', (req: express.Request, res: express.Response) => {
    res.json({message: "hello"});
})

app.use(router);

app.listen(3000);
console.log('start server localhost:3000');