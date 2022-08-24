class SubFamiliaPage {
  get btnArea() {
    return $("~Categoria Informática");
  }

  get btnFamilia() {
    return $("~Subcategoria Computadores");
  }

  get btnSubFamilia() {
    return $("~Subcategoria Portáteis");
  }

  get labelCategoria() {
    return $("~Preço desde 1329€");
  }
}

module.exports = new SubFamiliaPage();
