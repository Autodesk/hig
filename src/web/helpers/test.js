class TestHelpers {
  createFullNav() {
    // CREATE GLOBALNAV COMPONENT
    var GlobalNav = new Hig.GlobalNav();
    GlobalNav.mount("body");

    // ADD TOPNAV
    var TopNav = new GlobalNav.partials.TopNav({
      "logo": "https://www.dexigner.com/images/news/xw/22856.jpg",
      "logo_link": "#"
    });
    GlobalNav.addTopNav(TopNav);
    var MyProfile1 = new TopNav.partials.Profile({
      image: `${imagesPath}/egg.jpg`, name: "Jenny Eishingdrelo", email: "jenny.eishingdrelo@autodesk.com"
    });

    TopNav.addProfile(MyProfile1);
    // CREATE PROJECT ACCOUNT SWITCHER
    var ProjectAccountSwitcher = new TopNav.partials.ProjectAccountSwitcher({
      activeLabel: 'Global Construction / West Oakwood Medical Center',
      activeImage: `${imagesPath}/project-1.png`,
      activeType:  'account'
    });

    TopNav.addProjectAccountSwitcher(ProjectAccountSwitcher);
    return {TopNav, GlobalNav};
  }
}