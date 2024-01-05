'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')
 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const promiseCreator = new Promise((res, rej) => {
        const delay = form.elements.delay.value;
        const promiseState = form.elements.state.value;

        setTimeout(() => {
            if (promiseState === "fulfilled") {
                res(`✅ Fulfilled promise in ${delay}ms`)
            };
            if (promiseState === "rejected"){
                rej(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay)
        
    })

    promiseCreator
    .then((res) => {
        iziToast.show({
            message: res,
            messageColor: '#FFF',
            backgroundColor: '#18C252',
            position: 'topRight',
           }) 
    })
    .catch((rej) => {
        iziToast.show({
            message: rej,
            messageColor: '#FFF',
            backgroundColor: '#f54e59',
            position: 'topRight',
           }) 
    })

    form.reset()
})        
    

