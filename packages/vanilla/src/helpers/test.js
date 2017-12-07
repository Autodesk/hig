class TestHelpers {
  createFullNav() {
    // CREATE GLOBALNAV COMPONENT
    const GlobalNav = new Hig.GlobalNav();
    GlobalNav.mount('body');

    // ADD TOPNAV
    const TopNav = new GlobalNav.partials.TopNav({
      logo: 'https://www.dexigner.com/images/news/xw/22856.jpg',
      logo_link: '#',
    });
    GlobalNav.addTopNav(TopNav);
    const MyProfile1 = new TopNav.partials.Profile({
      image: `${imagesPath}/egg.jpg`, name: 'Jenny Eishingdrelo', email: 'jenny.eishingdrelo@autodesk.com',
    });

    TopNav.addProfile(MyProfile1);
    // CREATE PROJECT ACCOUNT SWITCHER
    const ProjectAccountSwitcher = new TopNav.partials.ProjectAccountSwitcher({
      activeLabel: 'Global Construction / West Oakwood Medical Center',
      activeImage: `${imagesPath}/project-1.png`,
      activeType: 'account',
    });

    TopNav.addProjectAccountSwitcher(ProjectAccountSwitcher);
    return { TopNav, GlobalNav };
  }
}

module.exports = TestHelpers;
