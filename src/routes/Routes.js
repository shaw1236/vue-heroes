//import Hello from '@/components/Hello';
//import App from '../App.vue';
import Hello from '../components/Hello.vue';
import HeroList from '../components/HeroList.vue';
import HeroDetail from '../components/HeroDetail.vue';
import DashBoard from '../components/DashBoard.vue';

const routes = [
    { 
        path: '/',
        name: 'Home',        
        component: DashBoard  
    },
    { 
        path: "/hello",
        name: 'Hello',     
        component: Hello
    },
    { 
        path: "/dashboard", 
        name: 'Dashboard',
        component: DashBoard  
    },
    { 
        path: "/heroes",  
        name: 'Hero List',  
        component: HeroList   
    },
    { 
        path: "/hero/:id",
        name: 'Hero',  
        component: HeroDetail 
    }
];

export default routes;
