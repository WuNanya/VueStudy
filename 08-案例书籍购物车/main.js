const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            }, {
                id: 2,
                name: '《机器学习》',
                date: '2019-9',
                price: 105.00,
                count: 1
            }, {
                id: 3,
                name: '《码出高效》',
                date: '2016-9',
                price: 100.00,
                count: 1
            }, {
                id: 4,
                name: '《大型网站技术架构》',
                date: '2016-9',
                price: 60.00,
                count: 1
            }, {
                id: 5,
                name: '《码农翻身》',
                date: '2016-12',
                price: 75.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        remove(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        // total()
        //     //1.普通的for循环遍历
        //     let totalprice = 0;
        //     for(let i = 0; i < this.books.length; i++){
        //         totalprice += this.books[i].price * this.books[i].count
        //     }
        //     return totalprice
        // }

        // total() {
        //     //2. 第二种for循环
        //     let totalprice = 0;
        //     for (let item in this.books) {
        //         totalprice += item.price * item.count
        //     }
        // }

        total() {}
    },
    filters: {
        showPrice(price) {
            return '$' + price.toFixed(2)
        }
    }
});