import './asset/css/admin/app.css';
import './asset/css/admin/dashboard.css';
import './asset/css/admin/productManage.css';
import './asset/assets/bootstrap-5.0.0-beta2-dist/css/bootstrap.min.css';
import './asset/assets/fontawesome-pro-5.15.1-web/css/all.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Managecate } from './components/Category/Managecate';
import { Manageprd } from './components/Product/Manageprd';
import { Addproduct } from './components/Product/Addproduct';
import { Editproduct } from './components/Product/Editproduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="row">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/managecate" component={Managecate}/>
          <Route path="/manageprd" component={Manageprd}/>
          <Route path="/addprd" component={Addproduct}/>
          <Route path="/editprd/:id/:id_cate" component={Editproduct}/>
          <Route path="/editprd/:id" component={Manageprd}/>
        </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
