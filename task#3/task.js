let book = document.querySelector('.book__content');


class Reader {
    constructor(container, item, data) {
        this.container = container;
        this.item = item;
        this.data = data;
        this.items = Array.from(this.container.querySelectorAll(`.${this.item}`));
        this.switch()
    }

    clearActive() {
        this.items.forEach((e) => {
            if (e.classList.contains(`${this.item}_active`))
            {e.classList.remove(`${this.item}_active`)};
        })
        
    };

    switch() {
        this.items.forEach((e) => {
            e.onclick = () => {
                this.clearActive();
                e.classList.add(`${this.item}_active`);
                let attribute = e.getAttribute(this.data);
                if (this.data === 'data-size') {
                    attribute === 'big' ? book.style.fontSize = 'large':book.style.fontSize = attribute;
                };
                if (this.data === 'data-text-color') {
                    book.style.color = attribute;
                };
                if (this.data === 'data-bg-color') {
                    book.style.backgroundColor = attribute;
                };
                return false;
            };
        });
    }
};

new Reader(document.querySelector('.book__control_font-size'), 'font-size', 'data-size');
new Reader(document.querySelector('.book__control_color'), 'color', 'data-text-color');
new Reader(document.querySelector('.book__control_background'), 'color', 'data-bg-color');
