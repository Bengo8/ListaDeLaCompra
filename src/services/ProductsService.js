export const OrderEnum = {
	cat: "cat",
	alfa: "alfa",
	creation: "creation"
}
Object.freeze(OrderEnum);

export default class ProductsService {
   constructor() {
      this.localCache = window.localStorage;

      const cacheProducts = this.localCache.getItem("products")

      if (cacheProducts !== undefined && cacheProducts !== null) {
         this.products = JSON.parse(cacheProducts);
      } else {
         this.products = [
            {
               id: 1,
               text: 'Sandía',
               cat: 'Fruta',
               bought: false
            },
            {
               id: 2,
               text: 'Salmón',
               cat: 'Pescado',
               bought: true
            },
            {
               id: 3,
               text: 'Helado',
               cat: 'Postre',
               bought: false
            }
         ]
      }
      this.localCache.setItem("products", JSON.stringify(this.products));

      this.orderValue = OrderEnum.cat;
      this.orderProducts();
   }

   getProducts = () => {
      return this.products;
   }

   setProducts = (prods, updateCache = true) => {
      this.products = prods;

      if (updateCache) {
         this.localCache.setItem("products", JSON.stringify(this.products));
      }
   }

   addNewProduct = (prod) => {
      let id = 1;
      if (this.products !== undefined && this.products !== null && this.products.length > 0) {
         id = this.products.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current
         })?.id
         id = id !== undefined && id !== null && id > 0 ? id + 1 : 1;
      }

      const newProd = ({id, ...prod});
      this.products.push(newProd);
      return this.orderProducts();
   }

   deleteProduct = (prodId) => {
      const newProducts = this.products.filter((prod) => prod.id !== prodId);
      
      this.setProducts(newProducts);
      return newProducts;
   }

   toggleBought = (prodId) => {
      const newProducts = this.products.map((prod) => {
         if (prod.id === prodId) prod.bought = !prod.bought
         return prod;
      })

      this.setProducts(newProducts);
      return newProducts;
   }

   orderProducts = (order = this.orderValue) => {
      let productsOrdered;
      switch (order) {
         case OrderEnum.cat:
            this.orderValue = order;
            productsOrdered = [...this.products].sort((a,b)=> {
               if (a.cat.toLowerCase() > b.cat.toLowerCase()) {
                 return 1;
               }
               if (a.cat.toLowerCase() < b.cat.toLowerCase()) {
                 return -1;
               }
               
               return 0;
             });
            break;
      
         case OrderEnum.alfa:
            this.orderValue = order;
            productsOrdered = [...this.products].sort((a,b)=> {
               if (a.text.toLowerCase() > b.text.toLowerCase()) {
                 return 1;
               }
               if (a.text.toLowerCase() < b.text.toLowerCase()) {
                 return -1;
               }
       
               return 0;
             });
            break;

         case OrderEnum.creation:
            this.orderValue = order;
            productsOrdered = [...this.products].sort((a,b)=> {
               if (a.id > b.id) {
                 return 1;
               }
               if (a.id < b.id) {
                 return -1;
               }
       
               return 0;
             });
            break;
         default:
            break;
      }

      if (productsOrdered !== null && productsOrdered !== undefined) { 
         this.setProducts(productsOrdered);
      }

      return productsOrdered;
   }
}