import * as express from 'express';

const app = express();

app.get('/api/stock', (req,res) => {
    let result = stocks;
    // 为什么这里是req.query, 而下面方法里面不是?
    let params = req.query;
    if(params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) != -1)
    } 

    res.json(result);
});


app.get('/api/stock/:id', (req,res) => {
    res.json(stocks.find(stock => stock.id == req.params.id));
});

const server = app.listen(8000, 'localhost', ()=>{
    console.log('服务器已启动，地址是http://localhost:8000');
})

export class Stock {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public rating: number,
      public desc: string,
      public categories: Array<string>
    ) {
    }
}

const stocks: Stock[] = [
    new Stock(1, "First stock", 1.99, 3.5, "This ist the first stock", ['IT']),
    new Stock(2, "Second stock", 1.99, 4.5, "This ist the second stock", ['IT']),
    new Stock(3, "Third stock", 1.99, 2.5, "This ist the third stock", ['IT']),
    new Stock(4, "Fourth stock", 1.99, 3, "This ist the fourth stock", ['IT']),
    new Stock(5, "Fifth stock", 1.99, 4, "This ist the fifth stock", ['IT']),
    new Stock(6, "Sixth stock", 1.99, 5, "This ist the sixtch stock", ['IT', 'Cloud']),
    new Stock(7, "Seventh stock", 1.99, 3.5, "This ist the seventh stock", ['IT']),
    new Stock(8, "Eighth stock", 1.99, 3, "This ist the eighth stock", ['IT', 'UI']),
  ];