export default class CategoriesServices {
   constructor() {
      this.categories = ["Carne", "Pescado", "Pasta", "Salsas", "Especias", "Fruta", "Verdura", "Postre", "Panadería", "Dulces", "Lácteos", "Baño", "Limpieza", "Ropa"];
   }

   getCategories = () => {
      return this.categories;
   }
}