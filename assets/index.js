function Calculator(){
    this.input = document.querySelector('.input');


    this.numToInput = value =>  this.input.value += value;

    this.delete = () => this.input.value = this.input.value.slice(0, -1);

    this.clear = () => this.input.value = "";

    this.equal = () => {
        let conta = this.input.value;

        try {
            conta = eval(conta)

            this.input.value = conta;
        } catch (error) {
            alert('Conta Invalida')
            return 
        }
    }

    this.capClicks = () => {
        document.addEventListener('click', e =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) this.numToInput(el.innerText);
            if(el.classList.contains('btn-del')) this.delete();
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-eq')) this.equal();
        });
    };

    this.start = () => {
        this.capClicks()
    };

};

const calculator = new Calculator();
calculator.start()