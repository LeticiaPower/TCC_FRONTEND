function PessoaService() {
var vm=this;

 vm.cadastrar=function(pessoa){ 
   console.log(pessoa);    
 } 
};
function UsuarioService($http) {
var vm=this;

 vm.cadastrar=function(usuario){ 
 $http.post("http://localhost:8080/app/usuario/cadastroUsuario", usuario);    
 } 
};


angular
    .module('inspinia')
    .service('PessoaService', PessoaService)
    .service('UsuarioService', UsuarioService)