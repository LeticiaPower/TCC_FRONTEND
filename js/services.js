
function UsuarioService($http) {
var vm=this;

vm.logar=function(usuario){ 
 return $http.post("http://localhost:8080/app/usuario/logar", usuario);    
 }; 

 vm.cadastrar=function(usuario){ 
 $http.post("http://localhost:8080/app/usuario/cadastroUsuario", usuario);    
 }; 
};

function AnuncioService($http) {
var vm=this;

 vm.cadastrar=function(anuncio){ 
 return $http.post("http://localhost:8080/app/dadosAnuncio/cadastraDadosAnuncio", anuncio);    
 } ;
 
 vm.buscar=function(){
return $http.get("http://localhost:8080/app/dadosAnuncio/listaDadosAnuncio");    
 };

 vm.excluirAnuncio=function(anuncio){ 
 return $http.get("http://localhost:8080/app/dadosAnuncio/excluiDadosAnuncio", anuncio);    
 }; 
 vm.alterarAnuncio=function(anuncio){ 
 return $http.post("http://localhost:8080/app/dadosAnuncio/alterarDadosAnuncio", anuncio);    
 };
 
};

function PessoaService($http) {
var vm=this;

 vm.cadastrar=function(pessoa){ 
 return $http.post("http://localhost:8080/app/pessoa/cadastraPessoa", pessoa);    
 };
 
 vm.buscarPorId=function(id){
return $http.get("http://localhost:8080/app/pessoa/buscaPorId/"+id );    
 };
 
  vm.alterar=function(pessoa){ 
 return $http.post("http://localhost:8080/app/pessoa/alterarPessoa", pessoa);    
 }; 
};

function RecenteService($http) {
var vm=this;
 
 vm.buscar=function(){
return $http.get("http://localhost:8080/app/dadosAnuncio/listaDadosAnuncio");    
 };
};

function PecaService($http) {
var vm=this;

 vm.cadastrar=function(peca){ 
 return $http.post("http://localhost:8080/app/pecas/cadastraPeca", peca);    
 }; 
 
 vm.buscar=function(){
return $http.get("http://localhost:8080/app/pecas/listaPeca");    
 };
 
  vm.alterar=function(peca){ 
 return $http.post("http://localhost:8080/app/pecas/alterarPeca", peca);    
 }; 
  vm.excluir=function(peca){ 
 return $http.get("http://localhost:8080/app/pecas/excluiPeca", peca);    
 }; 
};

function VeiculoService($http) {
var vm=this;

 vm.cadastrar=function(veiculo){ 
 return $http.post("http://localhost:8080/app/veiculo/cadastraVeiculo", veiculo);    
 }; 
 
 vm.buscar=function(){
return $http.get("http://localhost:8080/app/veiculo/listaVeiculo");    
 };
 
  vm.alterar=function(veiculo){ 
 return $http.post("http://localhost:8080/app/veiculo/alterarVeiculo", veiculo);    
 };
  vm.excluir=function(veiculo){ 
 return $http.get("http://localhost:8080/app/veiculo/excluiVeiculo", veiculo);    
 }; 
};



angular
    .module('inspinia')
    .service('PessoaService', PessoaService)
    .service('UsuarioService', UsuarioService)
     .service('AnuncioService', AnuncioService)
     .service('RecenteService', RecenteService)
     .service('PecaService', PecaService)
     .service('VeiculoService', VeiculoService)
