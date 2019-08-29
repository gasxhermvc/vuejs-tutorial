import Vue from "vue";
import VueRouter from "vue-router";

// import Home from '@/views/Home';
//import About from '@/views/About';
// import Contact from '@/views/Contact';
// import User from '@/views/User';
// import UserProfile from '@/views/UserProfile';
// import PageNotFound from '@/views/PageNotFound';

const Home = () => import("@/views/Home" /* webpackChunkName: 'home' */);
const Form = () => import("@/views/Form" /* webpackChunkName: 'form' */);
const About = () => import("@/views/About" /* webpackChunkName: 'about' */);
const User = () => import("@/views/User" /* webpackChunkName: 'user' */);
const UserProfile = () =>
  import("@/views/UserProfile" /* webpackChunkName: 'user-profile' */);
const Movie = () => import("@/views/Movie" /* webpackChunkName: 'movie' */);
const Nested = () => import("@/views/Nested" /* webpackChunkName: 'nested' */);
const Pagination = () =>
  import("@/views/Pagination" /* webpackChunkName: 'pagination' */);
const Search = () => import("@/views/Search" /* webpackChunkName: 'search' */);
const Chart = () => import("@/views/Chart" /* webpackChunkName: 'chart' */);
const I18N = () => import("@/views/i18n" /* webpackChunkName: 'i18n' */);
const PageNotFound = () =>
  import("@/views/PageNotFound" /* webpackChunkName: 'page-not-found' */);

//=>yarn add vue-router

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/form", component: Form },
  { path: "/about", component: About },
  { path: "/user", component: User },
  { path: "/user/:id", component: UserProfile },
  { path: "/search", component: Search },
  { path: "/chart", component: Chart },
  { path: "/movie", component: Movie },
  { path: "/nested", component: Nested },
  { path: "/pagination", component: Pagination },
  { path: "/i18n", component: I18N },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
