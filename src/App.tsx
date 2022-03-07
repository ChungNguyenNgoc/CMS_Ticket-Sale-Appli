import './App.css';
import { Layout } from 'antd';
import { Header } from './components/header/Header';
import { ContentList } from './components/ContentList';

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <ContentList/>
            </Layout>
        </div>
    );
}

export default App;
