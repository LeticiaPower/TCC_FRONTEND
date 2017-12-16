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
   //$scope.usuario.role=[];
   //$scope.usuario.role.push("vendedor", "comprador");
     UsuarioService.cadastrar($scope.usuario);
     
 }
 
 
 
 
 
 
 
 
};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
    .controller('CadastroCtrl', CadastroCtrl)