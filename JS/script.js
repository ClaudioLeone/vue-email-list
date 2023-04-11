const {createApp} = Vue;

createApp ({
    data() {
        return {
            rndMails: null,
            mailsArch: [],
        }
    },

    mounted() {
        this.getRndMail();
    },

    methods: {
        getRndMail() {
            for (let i = 0; i < 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response.data.response);
                    this.rndMails = response.data.response;
                    this.mailsArch.push(this.rndMails);
                })
            }
        }
    }
}).mount("#app")