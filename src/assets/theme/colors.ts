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
            default: this.dark ? '#2d2e32' : '#f4f6fa',
            dark: '#2d2e32',
            ligth: '#f4f6fa',
        };
    },
    get white() {
        return {
            default: this.dark ? '#25262a' : '#FFFFFF',
            dark: '#2d2e32',
            ligth: '#FFFFFF',
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
