class NavHeaderController {
  constructor ($rootScope, ContextService,$log) {
    'ngInject'

    let navHeader = this

    ContextService.me(function (data) {
      $log.info('user data : ',data);
      navHeader.userData = data
      if(data)
        navHeader.userData.avatar =  !angular.isUndefined(data.avatar) ? data.avatar : "//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=90&h=90&txtsize=36";

    })
  }

  $onInit () {}
}

export const NavHeaderComponent = {
  templateUrl: './views/app/components/nav-header/nav-header.component.html',
  controller: NavHeaderController,
  controllerAs: 'vm',
  bindings: {}
}
