class Parallax {
    constructor() {
        if (!this.setVars()) return;
        this.setListeners();
    }

    setVars() {
        this.elements = document.body.getElementsByClassName("parallax");
        if (!this.elements.length) return false;

        return true;
    }

    setListeners() {
        this.moveElements = this.moveElements.bind(this);
        window.addEventListener("scroll", this.moveElements, { passive: true });
    }

    moveElements() {
        const el = [...this.elements][0];
        const bottom = el && el.getBoundingClientRect().bottom;

        if (bottom > 0) {
            const top = el.getBoundingClientRect().top;
            const proportion = el.offsetHeight / -top;
    
            if (top < 0 && proportion > 1) {
                const elLength = el.getElementsByTagName("img").length;
                if (elLength) {
                    el.getElementsByTagName("img")[elLength - 1].style = 
                        `object-position: center calc(50% - ${1 / proportion} * 36%); opacity: 1`;
                }
            }
        }
    }
}

export default Parallax;