const app = Vue.createApp({
    data() {
        return {
            state: "",
            modal: false,
            count: 0,
            suggestions: [
                "Manifest",
                "House of Drogons",
                "Game of Thrones",
                "Midnight Mass",
                "Midnight Club",
                "House of Cards",
                "Breaking Bad",
                "Squid Game"
            ],
            results: []
        }
    },
    mounted() {
        this.getSuggestions();
    },
    methods: {
        getSuggestions() {
            this.modal = true;
            if (this.results.lenght == 0) {
                this.results = this.suggestions;
            }
            this.results = this.suggestions.filter(state => {
                let sugg;
                if (this.state.includes("=")) {
                    if (this.state.slice(-1) != "=") {
                        sugg = this.state.split("=")[this.count].toLowerCase();
                    }
                } else {
                    sugg = this.state.toLowerCase();
                }
                return state.toLowerCase().startsWith(sugg);
            });
        },
        setState(state) {
            if (this.state.includes("=")) {
                console.log("--", this.state, this.count);
                this.state = this.state.split("=")[this.count - 1].concat("="+state);  
            } else {
                this.state = state;
            }
            this.modal = false;
            this.count += 1;
        }
    }
  });
app.mount('#app')