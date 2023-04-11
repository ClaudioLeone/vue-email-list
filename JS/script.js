const {createApp} = Vue;

createApp ({
    data() {
        return {
            rndMails: null
        }
    },

    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                console.log(response.data.response);
                this.rndMails = response.data.response;
            })
    }
}).mount("#app")