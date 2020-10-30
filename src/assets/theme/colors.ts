const colors = (dark = false) => ({
    dark,
    get primary() {
        return {
            default: this.dark ? '#51c1c3' : '#51c1c3',
            contrast: this.dark ? '#51c1c3' : '#51c1c3',
            dark: '#51c1c3',
            light: '#51c1c3',
        };
    },
    get background() {
        return {
            default: this.dark ? '#f4f6fa' : '#f4f6fa',
            dark: '#f4f6fa',
            ligth: '#f4f6fa',
        };
    },
    get text() {
        return {
            default: this.dark ? '#f8f9fa' : '#545b64',
            dark: '#f8f9fa',
            light: '#545b64',
        };
    },
});

export default colors;
