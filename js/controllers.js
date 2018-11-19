/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};
function CadastroCtrl($scope, UsuarioService) {
 $scope.usuario={};
 $scope.cadastrar=function(){ 
   var vendedor={role:"vendedor"};
   var comprador={role:"comprador"};
     
     $scope.usuario.role=[];
   $scope.usuario.role.push(vendedor, comprador);
     UsuarioService.cadastrar($scope.usuario);
     
 }
 
};

function LoginCtrl($scope, UsuarioService ) {

 $scope.usuario = {};
 
 $scope.logar=function(){ 

     UsuarioService.logar($scope.usuario)
     .then(function(response) {
         localStorage.setItem("idUsuario", response.data.id);
        localStorage.setItem("idPessoa", response.data.pessoa.id);
        window.location.href = 'FRONTEND/index.html#/anuncios';
        },function(err){
            alert("Houve um error")
    });
 }
}

function AnuncioCtrl($scope,AnuncioService ) {
 $scope.anuncios = [];
 $scope.anuncio = {};
 
 $scope.buscar=function(anuncio){ 

    anuncios = AnuncioService.buscar()
     .then(function(response) {
         console.log('relaizado com sucesso');
        },function(err){
            alert("Houve um error")
    });
 }

 $scope.cadastrar=function(){ 
  
     AnuncioService.cadastrar($scope.anuncio)
     .then(function(response) {
      console.log('relaizado com sucesso');
    },
    function(err){
     alert("Houve um error")
    });
 }
 
 
};

function PessoaCtrl($scope,PessoaService ) {
 $scope.pessoas = [];
 $scope.pessoa = {};
 
 $scope.buscar=function(){ 
var id = localStorage.getItem("idPessoa");
    pessoa = PessoaService.buscarPorId(id)
     .then(function(response) {
         $scope.pessoa = response.data;
        },function(err){
            alert("Houve um error")
    });
 }

 $scope.cadastrar=function(){ 
     console.log($scope.pessoa);
     PessoaService.cadastrar($scope.pessoa)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
  $scope.alterar=function(){ 
     console.log($scope.pessoa);
     PessoaService.alterar($scope.pessoa)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
};

function RecenteCtrl($scope,RecenteService ) {
 $scope.anuncios = [];
 
 $scope.buscar=function(){ 

     RecenteService.buscar()
     .then(function(response) {
         $scope.anuncios = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
 }

 $scope.cadastrar=function(){ 
  
     AnuncioService.cadastrar($scope.anuncio)
     .then(function(response) {
      console.log('relaizado com sucesso');
    },
    function(err){
     alert("Houve um error")
    });
 }
 
 
};

function PecaCtrl($scope,PecaService ) {
 $scope.pecas = [];
 $scope.peca = {};
 
 $scope.buscar=function(){ 

     PecaService.buscar()
     .then(function(response) {
         $scope.pecas = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
 }

 $scope.cadastrar=function(){ 
     console.log($scope.peca);
     PecaService.cadastrar($scope.peca)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
  $scope.alterar=function(){ 
     console.log($scope.peca);
     PecaService.alterar($scope.peca)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
};

function VeiculoCtrl($scope,VeiculoService ) {
 $scope.veiculos = [];
 $scope.veiculo = {};
 
 $scope.buscar=function(){ 

     VeiculoService.buscar()
     .then(function(response) {
         $scope.veiculos = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
 }

 $scope.cadastrar=function(){ 
     console.log($scope.veiculo);
     VeiculosService.cadastrar($scope.veiculo)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
  $scope.alterar=function(){ 
     console.log($scope.veiculo);
     VeiculoService.alterar($scope.veiculo)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
};

function RegistroCtrl($scope, VeiculoService, PecaService, AnuncioService ) {
 $scope.anuncios = [];
 $scope.pecas = [];
 $scope.veiculos = [];
 $scope.veiculo = {};
 
 $scope.buscar=function(){ 
     
    AnuncioService.buscar()
     .then(function(response) {
         $scope.anuncios = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
     
    PecaService.buscar()
     .then(function(response) {
         $scope.pecas = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
    
     VeiculoService.buscar()
     .then(function(response) {
         $scope.veiculos = response.data
         console.log(response.data);
        },function(err){
            alert("Houve um error")
    });
 }
   $scope.alterarAnuncio=function(){ 
     console.log($scope.anuncio);
     AnuncioService.alterar($scope.anuncio)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
  $scope.alterarPeca=function(){ 
     console.log($scope.peca);
     PecaService.alterar($scope.peca)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
  $scope.alterarVeiculo=function(){ 
     console.log($scope.veiculo);
     VeiculoService.alterar($scope.veiculo)
     .then(function(response) {
      console.log('realizado com sucesso');
    },
    function(err){
     alert("Houve um erro")
    });
 }
 
};

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('CadastroCtrl', CadastroCtrl)
    .controller('anuncioCtrl', AnuncioCtrl)
    .controller('PessoaCtrl', PessoaCtrl)
    .controller('RecenteCtrl', RecenteCtrl)
    .controller('PecaCtrl', PecaCtrl)
    .controller('VeiculoCtrl', VeiculoCtrl)
    .controller('RegistroCtrl', RegistroCtrl)
    .controller('LoginCtrl', LoginCtrl);

    
