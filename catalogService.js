function catalogService (db) {
    this.getProductById = function (id) {
        return db.products.get(id);
    };

    this.getCategoryById = function (id) {
        return db.categories.get(id);
    };
}


var ff,ee,dd;
var aa,bb,cc;
var aLinkcolor;

