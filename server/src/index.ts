
import express, {Application} from 'express'
import indexRoutes from './routes/IndexRoutes'
import landLordRoutes from './routes/LandLordRoutes'
import morgan from 'morgan'
import cors from 'cors' 
import PropertyRoutes from './routes/PropertyRoutes'
import AdvisorRoutes from './routes/AdvisorRoutes'
import LandLordPropertyRoutes from './routes/LandLordPropertyRoutes'

class Server{
	public app: Application
	constructor() {
		this.app = express();
        this.config();
        this.routes();
	}
    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/LandLords',landLordRoutes);
        this.app.use('/api/Properties',PropertyRoutes);
        this.app.use('/api/Advisors',AdvisorRoutes);
        this.app.use('/api/LandLordsProperties',LandLordPropertyRoutes);

    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {console.log("Servidor en el puerto", this.app.get('port'))});
    }

}

const server = new Server();
server.start();
