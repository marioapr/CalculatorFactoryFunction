function createCalculator(){
    return {
        input: document.querySelector('.input'),

        start(){
        this.clickButton();
        this.enterPress()
        },

        enterPress(){
            this.input.addEventListener('keyup',e =>{
                if(e.keyCode === 13){
                    this.equal()
                }
            })
        },
        
        clickButton(){
            document.addEventListener('click', (e)=>{
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.numToInput(el.innerText)
                };

                if(el.classList.contains('btn-clear')){
                    this.clear()
                }
                if(el.classList.contains('btn-del')){
                    this.delete()
                }
                if(el.classList.contains('btn-eq')){
                    this.equal()
                }
            })
        },

        numToInput(value){
            this.input.value += value;
        },

        clear(){
            this.input.value = ''
        },

        delete(){
            this.input.value = this.input.value.slice(0,-1)
        },

        equal(){
            let conta = this.input.value

            try {
                conta = eval(conta)

                if(!conta){
                    alert('Conta Invalida');
                    return;
                }

            this.input.value = conta
            } catch (error) {
                alert('Conta Invalida');
                return;
            }
        }
    }
};

const calculator = createCalculator()

calculator.start()