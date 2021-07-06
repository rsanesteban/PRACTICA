import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Anuncio } from './models';

const models = await DataStore.query(Anuncio);
console.log(models);

export default App;
