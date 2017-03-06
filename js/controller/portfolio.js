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
			// display lyr
			document.querySelector('.portfolio_lyr').classList.add('active');
		}
	}
})();
