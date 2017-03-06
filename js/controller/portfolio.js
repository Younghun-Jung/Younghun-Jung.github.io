(function() {
	angular.module("HomepageApp")
	.controller("portfolioCtrl", PortfolioController);

	PortfolioController.$inject = ['DataService'];

	function PortfolioController(DataService) {
		var vm = this;

		vm.DataService = DataService;
		vm.data = DataService.portfolioData;
		vm.activeProject = {};
		vm.changeActiveProject = changeActiveProject;

		function changeActiveProject(currentProject) {
			vm.activeProject = currentProject;
			document.querySelector('body').classList.add('modal-open');
		}
	}
})();
