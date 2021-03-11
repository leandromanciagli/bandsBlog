import Home from '../components/Home.vue'
import Form from '../components/Form.vue'
import verUltimoDisco from '../components/verUltimoDisco.vue'

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/comentarios",
        name: "comentarios",
        component: Form
    },
    {
        path: "/ultimoDisco/:id",
        name: "ultimoDisco",
        component: verUltimoDisco
    }
];

export default routes;