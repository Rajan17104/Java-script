class cars {
    name;
    color;
    #price;
    #modify;

    constructor(n, c, p) {
        this.name = n;
        this.color = c;
        this.#price = p;
    }

    set modify(n) {
        this.#modify = n;
    }

    get modify() {
        return this.#modify;
    }

    #discount() {
        let discount = this.#price * 0.10;
        console.log("Your Discount is:", discount);
    }

    information() {

        console.log("Name:", this.name);
        console.log('Color:', this.color);
        console.log('Price:', this.#price);

        this.#discount();

    }


}

let c1 = new cars('Thar', 'Red', 100000);

c1.information();

// c1.#price = 120000;

c1.modify = 2000;
let res = c1.modify;

console.log('Your modification is:' + res);
