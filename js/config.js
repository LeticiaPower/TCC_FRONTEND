/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
         .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Login' }
        })
          .state('recuperarSenha', {
            url: "/recuperarSenha",
            templateUrl: "views/recuperar_senha.html",
            data: { pageTitle: 'Recuperar Senha' }
        })
          .state('cadastrar', {
            url: "/cadastrar",
            templateUrl: "views/register.html",
            data: { pageTitle: 'Cadastre - se' }
        })
         .state('listaAnuncios', {
            url: "/anuncios",
            templateUrl: "views/ecommerce_products_grid.html",
            data: { pageTitle: 'Anúncios recentes' }
        })
        .state('criaAnuncio', {
            url: "/inserirAnuncio",
            templateUrl: "views/ecommerce_product.html",
            data: { pageTitle: 'Inserir anuncio' }
        })
        .state('admInserir', {
            url: "/admInserir",
            templateUrl: "views/admInserir.html",
            data: { pageTitle: 'ADMINISTRADOR' }
        })
        .state('inserirPeca', {
            url: "/inserirPeca",
            templateUrl: "views/ecommerce_product_peca.html",
            data: { pageTitle: 'Cadastrar Peça' }
        })
        .state('completarCadastro', {
            url: "/inserirInfoPessoal",
            templateUrl: "views/form_basic.html",
            data: { pageTitle: 'Completar cadastro' }
        })
         .state('buscar', {
            url: "/buscar",
            templateUrl: "views/ecommerce_products_busca.html",
            data: { pageTitle: 'Buscar' }
        })
        .state('detalhes', {
            url: "/detalhes",
            templateUrl: "views/ecommerce_product_details.html",
            data: { pageTitle: 'Detalhes do Anúncio' }
        })
              .state('inserirVeiculo', {
            url: "/inserirVeiculo",
            templateUrl: "views/ecommerce_product_veiculo.html",
            data: { pageTitle: 'Cadastrar Veículo' }
        });

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
