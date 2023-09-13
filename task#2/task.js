class RotatorAd {
    constructor(rotator) {
        this.rotator = rotator;
        this.initialRotatorCase = this.rotator.querySelector('.rotator__case');
        this.rotatorCase = this.initialRotatorCase;
        this.interval = Number(this.rotatorCase.getAttribute('data-speed'));
        this.switchRorator();
    };

    setNewClassAndAttribute() {
        this.rotatorCase.classList.add('rotator__case_active');
        this.rotatorCase.style.color = this.rotatorCase.getAttribute('data-color');
        this.interval = this.rotatorCase.getAttribute('data-speed');
        clearInterval(this.inter);
        this.switchRorator();
    };

    switchRorator() {
        this.inter = setInterval(() => {
            this.rotatorCase.classList = 'rotator__case';
            this.rotatorCase = this.rotatorCase.nextElementSibling;
            if (this.rotatorCase == null) {
                this.rotatorCase = this.initialRotatorCase;
                this.setNewClassAndAttribute();
            }
            else {
                this.setNewClassAndAttribute();
                
            }}, this.interval);
    }
};

new RotatorAd(document.querySelector('p'))