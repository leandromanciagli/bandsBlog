import Home from '../components/Home.vue'
import Form from '../components/Form.vue'
import verUltimoDisco from '../components/verUltimoDisco.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/comentarios",
        name: "comentarios",
        component: Form
    },
    {
        path: "/ultimoAlbum/:albumId",
        name: "VerUltimoAlbum",
        props: true,
        component: verUltimoDisco
    }
];

export default routes;