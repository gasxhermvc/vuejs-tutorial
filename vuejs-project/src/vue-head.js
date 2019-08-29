import Vue from 'vue';
import VueHead from 'vue-head'

//yarn add vue-head

Vue.use(VueHead)

const head = {
    link: [
        {
            href: "https://fonts.googleapis.com/css?family=Taviraj&display=swap",
            rel: "stylesheet"
        }
    ],
    // script: [
    //     {
    //         src: ''
    //     }
    // ]
};

export {
    head
}