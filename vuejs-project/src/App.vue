<template>
    <div>
        <p>
            <section class="section">
                <div class="container">
                    <h1 class="title">App</h1>
                    <!-- <hello-world v-if="show" />
                    <button v-on:click="show = true" class="help is-success">Show</button> -->
                    <router-link :exact="true" to="/">Home</router-link> 
                    {{ ' | ' }}
                    <router-link to="/about">About</router-link>
                    {{ ' | ' }}
                    <router-link to="/user">User</router-link>
                    {{ ' | ' }}
                    <router-link to="/search">Search</router-link>
                    {{ ' | ' }}
                    <router-link to="/chart">Chart</router-link>
                    {{ ' | ' }}
                    <router-link to="/i18n">I18N</router-link>
                    {{ ' | ' }}
                    <router-link to="/movie">Movie</router-link>
                    {{ ' | ' }}
                    <router-link to="/form">Form</router-link> 
                    {{ ' | ' }}
                    <router-link to="/nested">Nested</router-link> 
                    {{ ' | ' }}
                    <router-link to="/pagination">Pagination</router-link> 
                    <hr />
                    <router-view />
                </div>
            </section>
        </p>
    </div>
</template>

<script>
//=>yarn add bulma
import 'bulma/css/bulma.min.css';
import { head } from './vue-head';

const HelloWorld = () => import('@/components/HelloWorld' /* webpackChunkName: 'hello-world' */)

export default {
    head: head,
    data(){
        return {
            show: false      
        }
    },
    components: {
        'hello-world': HelloWorld
    }
}
</script>

<style>
body{
    font-family: 'Taviraj', serif;
}

.router-link-active {
    color: cadetblue;
}
</style>