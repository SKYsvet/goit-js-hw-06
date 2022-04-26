const [decrement, spanValue, increment] =
    document.querySelector('#counter').children;

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
        spanValue.textContent = this.value;
        console.log(this);
    },
    increment() {
        this.value += 1;
        spanValue.textContent = this.value;
        console.log(this);
    }
}  

decrement.addEventListener('click', counter.decrement.bind(counter));

increment.addEventListener('click', counter.increment.bind(counter));