import Vue from 'vue';
import VeeValidate from 'vee-validate';
import dictionary from '@/dictionary';

Vue.use(VeeValidate, {
    dictionary: dictionary,
    locale: 'en'
});