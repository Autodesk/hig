(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Hig"] = factory();
	else
		root["Hig"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	"version": "1.0.0",
	"abstract": {
		"EventObject": {
			"desc": "listen to events",
			"params": [
				"{Function} fn - function to be called on event, function will get native event as input"
			],
			"returns": "{Function} disposeFunction - function you can call directly to remove event listener"
		}
	},
	"basics": {
		"Button": {
			"methods": {
				"setTitle": {
					"desc": "sets the title of a button",
					"params": [
						"{String} title - new title for the button"
					]
				},
				"setLink": {
					"desc": "sets the link of a button",
					"params": [
						"{String} link - new link for the button"
					]
				},
				"setStyle": {
					"desc": "sets the style of a button",
					"params": [
						"{String} style - style for the button"
					]
				},
				"onClick": {
					"desc": "Calls the provided callback when user clicks on the button",
					"params": "HIG.abstract.EventObject.params",
					"returns": "HIG.abstract.EventObject.returns"
				},
				"onHover": {
					"desc": "Calls the provided callback when user moves the mouse over the button",
					"params": "HIG.abstract.EventObject.params",
					"returns": "HIG.abstract.EventObject.returns"
				}
			},
			"defaults": {
				"title": "{String} title of the button",
				"link": "{String} link of the button",
				"style": "{String} style of the button"
			}
		},
		"Flyout": {
			"methods": {
				"open": {
					"desc": "opens the flyout"
				},
				"close": {
					"desc": "closes the flyout"
				},
				"onClickOutside": {
					"desc": "Calls the provided callback when the flyout is open and the user clicks outside of the flyout",
					"params": "HIG.abstract.EventObject.params",
					"returns": "HIG.abstract.EventObject.returns"
				},
				"addSlot": {
					"desc": "Content for the flyout",
					"params": [
						"{HTMLElement} HTMLElement"
					]
				},
				"addTarget": {
					"desc": "Flyout will be positioned relative to this element",
					"params": [
						"{HTMLElement} HTMLElement"
					]
				}
			}
		}
	},
	"components": {
		"GlobalNav": {
			"methods": {
				"addSideNav": {
					"desc": "Pass in an instance of a SideNav partial to mount it to the GlobalNav",
					"params": [
						"{SideNav} SideNav - instance of a SideNav partial"
					],
					"returns": "{SideNav}"
				},
				"addTopNav": {
					"desc": "Pass in an instance of a TopNav",
					"params": [
						"{TopNav} TopNav - instance of a TopNav partial"
					]
				},
				"addSubNav": {
					"desc": "Pass in an instance of a SubNav",
					"params": [
						"{SubNav} SubNav - instance of a SubNav partial"
					]
				},
				"addSlot": {
					"desc": "Pass in any HTMLElement you want",
					"params": [
						"{HTMLElement} HTMLElement"
					]
				},
				"showSideNav": {
					"desc": "show the SideNav"
				},
				"hideSideNav": {
					"desc": "hide the SideNav"
				},
				"onHoverOutside": "HIG.abstract.EventObject"
			},
			"partials": {
				"TopNav": {
					"methods": {
						"setLogo": {
							"desc": "sets the logo",
							"params": [
								"{String} logo - url to svg or other image object"
							]
						},
						"setLogoLink": {
							"desc": "sets the link of the logo",
							"params": [
								"{String} link - new link"
							]
						},
						"sidenavOpen": {
							"desc": "changes the hamburger icon to a close icon"
						},
						"sidenavClosed": {
							"desc": "changes the close icon to a hamburger icon"
						},
						"addProfile": {
							"desc": "Pass in an instance of an Profile partial to mount it to the GlobalNav",
							"params": [
								"{Profile} Profile - instance of a Profile partial"
							]
						},
						"addProjectAccountSwitcher": {
							"desc": "Pass in an instance of a ProjectAccountSwitcher partial to mount it to the TopNav",
							"params": [
								"{ProjectAccountSwitcher} ProjectAccountSwitcher - instance of a ProjectAccountSwitcher partial"
							]
						},
						"addSearch": {
							"desc": "Pass in an instance of a Search partial",
							"params": [
								"{Link} Search - instance of a Search partial",
								"{Search} [ReferenceSearch] - (Optional) reference node for insertBefore"
							]
						},
						"addShortcut": {
							"desc": "Pass in an instance of a Shortcut partial to mount it to the TopNav",
							"params": [
								"{Shortcut} Shortcut - instance of a Shortcut partial"
							]
						},
						"addHelp": {
							"desc": "Pass in an instance of a Help partial to mount it to the TopNav",
							"params": [
								"{Help} Help - instance of a Help partial"
							]
						},
						"onHamburgerClick": {
							"desc": "Calls the provided callback when user clicks on the hamburger icon",
							"params": "HIG.abstract.EventObject.params",
							"returns": "HIG.abstract.EventObject.returns"
						}
					},
					"defaults": {
						"logo": "{String} url to svg or other image object",
						"logoLink": "{String} url behind the logo"
					},
					"partials": {
						"Search": {
							"methods": {
								"setPlaceholder": {
									"desc": "sets the placeholder",
									"params": [
										"{String} placeholder - new placeholder"
									]
								},
								"setQuery": {
									"desc": "sets the search query",
									"params": [
										"{String} query - new query"
									]
								},
								"showClearIcon": {
									"desc": "show the clear input icon"
								},
								"hideClearIcon": {
									"desc": "hide the clear input icon"
								},
								"onClearIconClick": "HIG.abstract.EventObject",
								"onInput": "HIG.abstract.EventObject",
								"onFocusIn": "HIG.abstract.EventObject",
								"onFocusOut": "HIG.abstract.EventObject"
							},
							"defaults": {
								"query": "{String} Set a search query in the input",
								"placeholder": "{String} A placeholder text when nothing is searched"
							}
						},
						"Profile": {
							"methods": {
								"setEmail": {
									"desc": "sets the email",
									"params": [
										"{String} email - email of the signed in user"
									]
								},
								"setImage": {
									"desc": "sets the image",
									"params": [
										"{String} image - url to svg or other image object"
									]
								},
								"setName": {
									"desc": "sets the name",
									"params": [
										"{String} name - name of the signed in user"
									]
								},
								"setProfileSettingsLabel": {
									"desc": "sets the settings label",
									"params": [
										"{String} settings label - label for the settings button"
									]
								},
								"setProfileSettingsLink": {
									"desc": "sets the settings link",
									"params": [
										"{String} settingsLink - label for the settings link button"
									]
								},
								"setSignOutLabel": {
									"desc": "sets the sign out label",
									"params": [
										"{String} signOutLabel - label for the sign out button"
									]
								},
								"setSignOutLink": {
									"desc": "sets the settings link",
									"params": [
										"{String} settingsLink - label for the settings link button"
									]
								},
								"open": {
									"desc": "opens the profile"
								},
								"close": {
									"desc": "closes the profile"
								},
								"onProfileClickOutside": {
									"desc": "Calls the provided callback when the profile is open and the user clicks outside of the profile",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								},
								"onProfileImageClick": {
									"desc": "Calls the provided callback when user clicks on the profile image",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								},
								"onProfileSettingsClick": {
									"desc": "Calls the provided callback when user clicks on the profile settings link",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								},
								"onSignOutClick": {
									"desc": "Calls the provided callback when user clicks on the sign out button",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								}
							},
							"defaults": {
								"image": "{String} url src of the image",
								"email": "{String} email for profile",
								"name": "{String} display name for profile",
								"profileSettingsLabel": "{String} profileSettingsLabel",
								"profileSettingsLink": "{String} profileSettingsLink",
								"signOutLabel": "{String} signOutLabel"
							}
						},
						"ProjectAccountSwitcher": {
							"methods": {
								"addAccount": {
									"desc": "Pass in an instance of a ProjectAccountSwitcher Account",
									"params": [
										"{Account} [ReferenceAccount]",
										"{Account} [ReferenceAccount] - (Optional) reference node for insertBefore"
									]
								},
								"addProject": {
									"desc": "Pass in an instance of a ProjectAccountSwitcher Project",
									"params": [
										"{Project} [ReferenceProject]",
										"{Project} [ReferenceProject] - (Optional) reference node for insertBefore"
									]
								},
								"removeCaretFromTarget": {
									"desc": "removes caret from target in Project Account Switcher"
								},
								"open": {
									"desc": "opens the project/account switcher"
								},
								"close": {
									"desc": "closes the project/account switcher"
								},
								"setActiveLabel": {
									"desc": "Sets the label displayed in the top nav",
									"params": [
										"{String} - Label of the active project or account"
									]
								},
								"setActiveImage": {
									"desc": "Sets the image displayed in the top nav",
									"params": [
										"{String} - url of the image of the active project or account"
									]
								},
								"setActiveType": {
									"desc": "Sets the type of the item displayed in the top nav",
									"params": [
										"{String} - ['account' or 'project']"
									]
								},
								"onClickOutside": {
									"desc": "Calls the provided callback when the switcher is open and the user clicks outside the switcher",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								},
								"onClick": {
									"desc": "Calls the provided callback when user clicks on the switcher in the top nav",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								}
							},
							"partials": {
								"Account": {
									"methods": {
										"setLabel": {
											"desc": "sets the label",
											"params": [
												"{String} label - new label"
											]
										},
										"setImage": {},
										"activate": {
											"desc": "activates the account"
										},
										"deactivate": {
											"desc": "deactivates the account"
										},
										"onClick": {
											"desc": "Calls the provided callback when user clicks on the account",
											"params": "HIG.abstract.EventObject.params",
											"returns": "HIG.abstract.EventObject.returns"
										}
									},
									"defaults": {
										"image": "{String} - url of the account image",
										"label": "{String} - label of the account"
									}
								},
								"Project": {
									"methods": {
										"setLabel": {
											"desc": "sets the label",
											"params": [
												"{String} label - new label"
											]
										},
										"setImage": {},
										"activate": {
											"desc": "activates the project"
										},
										"deactivate": {
											"desc": "deactivates the project"
										},
										"onClick": {
											"desc": "Calls the provided callback when user clicks on the project",
											"params": "HIG.abstract.EventObject.params",
											"returns": "HIG.abstract.EventObject.returns"
										}
									},
									"defaults": {
										"image": "{String} - url of the project image",
										"label": "{String} - label of the project"
									}
								}
							},
							"defaults": {
								"activeImage": "{String} - url of the image of the active project or account",
								"activeType": "{String} ['account' or 'project']",
								"activeLabel": "{String} - Label of the active project or account"
							}
						},
						"Shortcut": {
							"methods": {
								"setIcon": {
									"desc": "sets the icon of the Shortcut",
									"params": [
										"{String} title - new icon ID"
									]
								},
								"setTitle": {
									"desc": "sets the hover title of the Shortcut",
									"params": [
										"{String} title - new hover title"
									]
								},
								"setLink": {
									"desc": "sets the link of the Shortcut",
									"params": [
										"{String} link - new link"
									]
								},
								"onClick": {
									"desc": "Calls the provided callback when user clicks on the Shortcut",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								}
							},
							"defaults": {
								"icon": "{String} icon identifier",
								"title": "{String} the title of the Shortcut to be shown on hover",
								"link": "{String} link behind the Shortcut"
							}
						},
						"Help": {
							"methods": {
								"setTitle": {
									"desc": "sets the hover title of the Help",
									"params": [
										"{String} title - new hover title"
									]
								},
								"setLink": {
									"desc": "sets the link of the Help",
									"params": [
										"{String} link - new link"
									]
								},
								"onClick": {
									"desc": "Calls the provided callback when user clicks on the Help",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								}
							},
							"defaults": {
								"title": "{String} the title of the Help icon to be shown on hover",
								"link": "{String} link behind the Help icon"
							}
						}
					}
				},
				"SubNav": {
					"methods": {
						"setModuleIndicatorName": {
							"desc": "sets the moduleIndicatorName",
							"params": [
								"{String} moduleIndicatorName - new moduleIndicatorName"
							]
						},
						"setModuleIndicatorIcon": {
							"desc": "sets the moduleIndicatorIcon",
							"params": [
								"{String} moduleIndicatorIcon - new moduleIndicatorIcon"
							]
						},
						"addTabs": {
							"desc": "Pass in an instance of Tabs",
							"params": [
								"{Tabs} Tabs - instance of a Tabs partial"
							]
						},
						"onModuleIndicatorClick": {
							"desc": "Calls the provided callback when the module indicator (name or icon) is clicked",
							"params": "HIG.abstract.EventObject.params",
							"returns": "HIG.abstract.EventObject.returns"
						}
					},
					"partials": {
						"Tabs": {
							"methods": {
								"addTab": {
									"desc": "Pass in an instance of a SubNav Tab partial",
									"params": [
										"{Tab} Tab - instance of a Tab partial",
										"{Tab} [ReferenceTab] - (Optional) reference node for insertBefore"
									]
								}
							},
							"partials": {
								"Tab": {
									"methods": {
										"setLabel": {
											"desc": "sets the label",
											"params": [
												"{String} label - new label"
											]
										},
										"activate": {
											"desc": "activates the tab"
										},
										"deactivate": {
											"desc": "deactivates the tab"
										},
										"onClick": {
											"desc": "Calls the provided callback when user clicks on the tab",
											"params": "HIG.abstract.EventObject.params",
											"returns": "HIG.abstract.EventObject.returns"
										}
									},
									"defaults": {
										"label": "{String} Label of the tab"
									}
								}
							}
						}
					},
					"defaults": {
						"moduleIndicatorName": "{String} Name of the module",
						"moduleIndicatorIcon": "{String} icon identifier"
					}
				},
				"SideNav": {
					"methods": {
						"addSection": {
							"desc": "Pass in an instance of a SideNav Section partial",
							"params": [
								"{Section} Section - instance of a Section partial",
								"{Section} [ReferenceSection] - (Optional) reference node for insertBefore"
							]
						},
						"addLink": {
							"desc": "Pass in an instance of a SideNav Link partial",
							"params": [
								"{Link} Link - instance of a Link partial",
								"{Link} [ReferenceLink] - (Optional) reference node for insertBefore"
							]
						},
						"addSearch": {
							"desc": "Pass in an instance of a Search partial",
							"params": [
								"{Link} Search - instance of a Search partial",
								"{Search} [ReferenceSearch] - (Optional) reference node for insertBefore"
							]
						},
						"setCopyright": {
							"desc": "Change the copyright notice at bottom of side nav",
							"params": [
								"{String} Copyright notice"
							]
						}
					},
					"partials": {
						"Search": {
							"methods": {
								"setPlaceholder": {
									"desc": "sets the placeholder",
									"params": [
										"{String} placeholder - new placeholder"
									]
								},
								"setQuery": {
									"desc": "sets the search query",
									"params": [
										"{String} query - new query"
									]
								},
								"showClearIcon": {
									"desc": "show the clear input icon"
								},
								"hideClearIcon": {
									"desc": "hide the clear input icon"
								},
								"onClearIconClick": "HIG.abstract.EventObject",
								"onInput": "HIG.abstract.EventObject",
								"onFocusIn": "HIG.abstract.EventObject",
								"onFocusOut": "HIG.abstract.EventObject"
							},
							"defaults": {
								"query": "{String} Set a search query in the input",
								"placeholder": "{String} A placeholder text when nothing is searched"
							}
						},
						"Section": {
							"methods": {
								"setHeaderLabel": {
									"desc": "sets the label",
									"params": [
										"{String} label - new label"
									]
								},
								"setHeaderName": {
									"desc": "sets the name",
									"params": [
										"{String} name - new name"
									]
								},
								"addGroup": {
									"desc": "Pass in an instance of a SideNav Section Group partial",
									"params": [
										"{Group} Group - instance of a Group partial",
										"{Group} [ReferenceGroup] - (Optional) reference node for insertBefore"
									]
								},
								"addCollapse": {
									"desc": "Pass in an instance of a Collapse partial",
									"params": [
										"{Collapse} Collapse - instance of a Collapse partial",
										"{Collapse} [ReferenceCollapse] - (Optional) reference node for insertBefore"
									]
								},
								"show": {
									"desc": "show (used for filtering)"
								},
								"hide": {
									"desc": "hide (used for filtering)"
								}
							},
							"defaults": {
								"headerLabel": "{String} A label for the section, ex: Project or Account",
								"headerName": "{String} A identifiable project or account name"
							},
							"partials": {
								"Group": {
									"methods": {
										"addModule": {
											"desc": "Pass in an instance of a SideNav group Module partial",
											"params": [
												"{Module} Module - instance of a Module partial",
												"{Module} [ReferenceModule] - (Optional) reference node for insertBefore"
											]
										},
										"show": {
											"desc": "show (used for filtering)"
										},
										"hide": {
											"desc": "hide (used for filtering)"
										}
									},
									"partials": {
										"Module": {
											"methods": {
												"setIcon": {
													"desc": "sets the icon of an module",
													"params": [
														"{String} title - new icon ID"
													]
												},
												"setTitle": {
													"desc": "sets the title of an module",
													"params": [
														"{String} title - new title"
													]
												},
												"setLink": {
													"desc": "sets the link of an module",
													"params": [
														"{String} link - new link"
													]
												},
												"show": {
													"desc": "show (used for filtering)"
												},
												"hide": {
													"desc": "hide (used for filtering)"
												},
												"activate": {
													"desc": "activates the module"
												},
												"deactivate": {
													"desc": "deactivates the module"
												},
												"showSubmodules": {
													"desc": "show the submodules"
												},
												"hideSubmodules": {
													"desc": "hide the submodules"
												},
												"addSubmodule": {
													"desc": "Pass in an instance of a Submodule partial",
													"params": [
														"{Submodule} Submodule - instance of a Submodule partial",
														"{Submodule} [ReferenceSubmodule] - (Optional) reference node for insertBefore"
													]
												},
												"onClick": {
													"desc": "Calls the provided callback when user clicks on the item",
													"params": "HIG.abstract.EventObject.params",
													"returns": "HIG.abstract.EventObject.returns"
												},
												"onHover": {
													"desc": "Calls the provided callback when user moves the mouse over the item",
													"params": "HIG.abstract.EventObject.params",
													"returns": "HIG.abstract.EventObject.returns"
												}
											},
											"defaults": {
												"icon": "{String} icon identifier",
												"title": "{String} the string of our SideNav module",
												"link": "{String} link behind the module"
											},
											"partials": {
												"Submodule": {
													"methods": {
														"setTitle": {
															"desc": "sets the title of an module",
															"params": [
																"{String} title - new title"
															]
														},
														"setLink": {
															"desc": "sets the link of an module",
															"params": [
																"{String} link - new link"
															]
														},
														"show": {
															"desc": "show (used for filtering)"
														},
														"hide": {
															"desc": "hide (used for filtering)"
														},
														"activate": {
															"desc": "activates the submodule"
														},
														"deactivate": {
															"desc": "deactivates the submodule"
														},
														"onClick": {
															"desc": "Calls the provided callback when user clicks on the item",
															"params": "HIG.abstract.EventObject.params",
															"returns": "HIG.abstract.EventObject.returns"
														},
														"onHover": {
															"desc": "Calls the provided callback when user clicks on the item",
															"params": "HIG.abstract.EventObject.params",
															"returns": "HIG.abstract.EventObject.returns"
														}
													},
													"defaults": {
														"title": "{String} the string of our SideNav submodule",
														"link": "{String} link behind the submodule"
													}
												}
											}
										}
									}
								},
								"Collapse": {
									"methods": {
										"minimize": {
											"desc": "show [ - ]"
										},
										"maximize": {
											"desc": "show [ + ]"
										},
										"show": {
											"desc": "show (used for filtering)"
										},
										"hide": {
											"desc": "hide (used for filtering)"
										},
										"onClick": {
											"desc": "Calls the provided callback when user clicks on the item",
											"params": "HIG.abstract.EventObject.params",
											"returns": "HIG.abstract.EventObject.returns"
										}
									}
								}
							}
						},
						"Link": {
							"methods": {
								"setTitle": {
									"desc": "sets the title",
									"params": [
										"{String} title - new title"
									]
								},
								"setLink": {
									"desc": "sets the link",
									"params": [
										"{String} link - new link"
									]
								},
								"onClick": {
									"desc": "Calls the provided callback when user clicks on the link",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								},
								"onHover": {
									"desc": "Calls the provided callback when user moves the mouse over the link",
									"params": "HIG.abstract.EventObject.params",
									"returns": "HIG.abstract.EventObject.returns"
								}
							},
							"defaults": {
								"title": "{String} title",
								"link": "{String} link"
							}
						}
					},
					"defaults": {
						"copyright": "{String} Copyright notice at bottom of side nav"
					}
				}
			}
		}
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icons = __webpack_require__(5);
var Mustache = __webpack_require__(58);

var Core = function () {

    /**
     * Our constructor mixes the options with the defaults (_defaults function) provided by the implementation class
     * @abstract
     * @param {Object} [options] - Options object with the overrides for our defaults
     */

    function Core(options) {
        _classCallCheck(this, Core);

        this._events = {};

        // CHECK INTERFACE COMPATIBILITY
        if (!this._interface) {
            console.warn("NO INTERFACE SET FOR CLASS, PLEASE DEFINE INTERFACE IN _interface PROPERTY OF YOUR CLASS");
        } else {

            var methodArray = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
            // CHECK IF ALL METHODS IN COMPONENT ARE DEFINED IN INTERFACE
            methodArray.forEach(function (v, i) {
                if (v != "constructor" && v != "defaults" && v[0] != "_" && !this._interface["methods"][v]) {
                    console.error("METHOD: \"" + this.constructor.name + '.' + v + "\" IS NOT DEFINED AS INTERFACE OR IS NOT A VALID INTERFACE METHOD");
                }
            }, this);

            // CHECK IF ALL METHODS IN INTERFACE ARE IMPLEMENTED
            for (var k in this._interface["methods"]) {
                if (methodArray.indexOf(k) === -1) {
                    console.error('METHOD: "' + this.constructor.name + '.' + k + '" IS NOT IMPLEMENTED BY THIS COMPONENT YET AND NEEDS AN IMPLEMENTATION');
                }
            };
        }

        // CHECK DEFAULTS ARE DEFINED
        if (!this._defaults) {
            console.warn('NO DEFAULTS SET FOR ' + this.constructor.name + ', PLEASE DEFINE DEFAULTS IN _defaults PROPERTY OF YOUR CLASS');
        } else {
            for (var v in this._interface['defaults']) {
                if (this._defaults[v] === undefined) {
                    console.error('DEFAULT VALUE: "' + this.constructor.name + '.' + v + '" IS DEFINED IN THE INTERFACE BUT NOT IMPLIMENTED', this);
                }
            };
        }

        // MIX OPTIONS WITH DEFAULTS
        if (options) {
            var defaults = this._defaults;
            if (defaults) {
                for (var key in defaults) {
                    if (!defaults.hasOwnProperty(key)) continue; // skip loop if the property is from prototype
                    if (!options[key]) {
                        options[key] = defaults[key];
                    }
                }
            }
        } else {
            options = this._defaults;
        }

        // SET PARTIALS IF ANY
        if (this._partials) {
            this.partials = this.constructor._partials;
        }
    }

    _createClass(Core, [{
        key: '_render',


        /**
         * Creation of the DOM element and mustache template rendering
         * @param {String} template - template string
         * @param {Object} [data] - default values on render
         * @param {Object} [partials] - object with potential partials
         * @returns null
         */

        value: function _render(template, data, partials) {
            if (!this._rendered) {
                var elWrapper = document.createElement('div');
                data = data || {};

                // ICON MIXIN
                data.renderIcon = function () {
                    return function (text, render) {
                        var k = Mustache.render(text, data);
                        var i = k == "" ? "" : Icons[k];
                        if (i == undefined) {
                            console.warn("NO HIG ICON FOUND WITH THE NAME: " + k);
                        }
                        return "<div class='hig__icon'>" + i + "</div>";
                    };
                };
                elWrapper.innerHTML = Mustache.render(template, data, partials || {});
                this._rendered = elWrapper.firstChild;
            } else {
                console.error("RENDER ALREADY CALLED ON THIS COMPONENT, USE PROPER METHODS TO UPDATE CONTENT");
            }
        }
    }, {
        key: '_componentDidMount',
        value: function _componentDidMount() {}
        // Subclass should implement this if needed


        /**
         * Inserts the HIG Element into the DOM using mountNode. If beforeChild is specified the HIG Element should be inserted before that.
         * If string, this is a CSS selector if more than one element matches it takes the first
         * @param {String | HTMLElement} mountNode - CSS selector or HTMLElement where to mount
         * @param {String | HTMLElement | null} beforeChild - if defined will use beforeChild instead of appendChild
         * @param {String | HTMLElement | null} scopeNode - if defined will limit search inside of this element
         * @returns {HTMLElement} el - HTMLElement that is mounted to DOM
         */

    }, {
        key: 'mount',
        value: function mount(mountNode, beforeChild, scopeNode) {
            var parentNode = this._findDOMEl(mountNode, scopeNode);
            var refNode = this._findDOMEl(beforeChild, scopeNode);

            this.el = parentNode.insertBefore(this._rendered, refNode);
            this._componentDidMount();
            return mountNode.el;
        }

        /**
         * Inserts a partial child into the DOM at a specified comment.
         * @param {String} searchComment - HTML comment to target
         * @param {HIGComponent} mountNode - HIG Component to attach to DOM
         * @param {String | HTMLElement | null} scopeNode - if defined will limit search inside of this element
         * @returns {HTMLElement} el - HTMLElement that is mounted to DOM
         */

    }, {
        key: 'mountPartialToComment',
        value: function mountPartialToComment(searchComment, mountNode, scopeNode) {
            function filterNone() {
                return NodeFilter.FILTER_ACCEPT;
            }

            var comment = null;

            var iterator = document.createNodeIterator(this.el || document, NodeFilter.SHOW_COMMENT, filterNone, false); // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
            var curNode;
            while (curNode = iterator.nextNode()) {
                if (curNode.nodeValue == searchComment) {
                    comment = curNode;
                }
            }

            if (comment) {
                var refNode = scopeNode ? scopeNode.el : comment;
                if (mountNode._rendered) {
                    mountNode.el = comment.parentNode.insertBefore(mountNode._rendered, refNode);
                    mountNode._componentDidMount();
                } else {
                    mountNode.el = comment.parentNode.insertBefore(mountNode, refNode);
                }

                return mountNode.el;
            } else {
                console.error('MOUNT PARTIAL TO COMMENT: ' + this.constructor.name + ' has no comment "' + searchComment + '" to mount to.');
            }
        }

        /**
         * Remove the HTMLElement from the DOM, does NOT destroy the component, lifecyclemanagement is handled by the adapter or implementation layer!
         * @returns null
         */

    }, {
        key: 'unmount',
        value: function unmount() {
            if (!this.el) {
                return;
            }
            this.el.parentNode.removeChild(this.el); // use removeChild for IE11 support
        }

        /**
         * Attach a document event listener
         * @param {String} eventType - event type, for example "click"
         * @param {String} targetClass - query selector for target class
         * @param {HTMLElement} scopeElement - element that defines the scope in which this takes place
         * @param {String} executeOnEventFunction - function that will be executed on event
         * @returns {Function} disposeFunction - function to call to remove event listener
         */

    }, {
        key: '_attachListener',
        value: function _attachListener(eventType, targetClass, scopeElement, executeOnEventFunction) {

            // #TODO: dont attach event listeners twice if _attachListener is called by second item, save events in local this._events object and loop through before attaching a new event

            function childOf( /*child node*/c, /*parent node*/p) {
                //returns boolean
                while ((c = c.parentNode) && c !== p) {}
                return !!c;
            }

            var q = this._findDOMEl(targetClass, scopeElement);
            var eventTarget, eventFn;

            if (eventType == 'hover' || eventType == 'mouseenter') {
                eventFn = executeOnEventFunction;
                eventTarget = q;
                eventType = 'mouseenter';
            } else {
                eventFn = function eventFn(event) {
                    var element = event.target;

                    if (q && (childOf(element, q) || element === q)) {
                        executeOnEventFunction(event);
                    }
                };
                eventTarget = document;
            }

            eventTarget.addEventListener(eventType, eventFn);

            var dispose = function dispose() {
                eventTarget.removeEventListener(eventType, eventFn);
            };

            return dispose;
        }

        /**
         * Determines search type and returns the first DOM element found
         * @param {String | HTMLElement} f - input to search
         * @param {String | HTMLElement} [s] - optional scope for search
         * @returns {HTMLElement} object that was found
         */

    }, {
        key: '_findDOMEl',
        value: function _findDOMEl(f, s) {
            if (typeof f === "string") {
                // do our selection
                var domEl = (s || document).querySelectorAll(f);
                if (!domEl || domEl.length === 0) {
                    return console.error("TARGET NOT FOUND ", f);
                } else {
                    return domEl[0];
                }
            } else {
                return f; // already a HTMLElement, no need to search
            }
        }

        /**
         * Get the Icon SVG String
         * @param {String} icon - icon ID
         * @returns {String} String with SVG of the icon
         */

    }, {
        key: '_getIconString',
        value: function _getIconString(icon) {
            return Icons[icon];
        }

        /**
         * Returns valid interface methods
         * @returns {Object} interface methods
         */

    }, {
        key: 'help',
        value: function help() {
            return this._interface;
        }
    }, {
        key: 'defaults',
        value: function defaults() {
            return this._defaults;
        }
    }, {
        key: 'el',
        get: function get() {
            if (this._el) {
                return this._el;
            }

            throw 'ELEMENT: You cannot access ' + this.constructor.name + '\'s `el` property before it is mounted.';
        },
        set: function set(element) {
            this._el = element;
        }
    }, {
        key: '_interface',
        get: function get() {
            return this.constructor._interface;
        }
    }, {
        key: '_defaults',
        get: function get() {
            return this.constructor._defaults;
        }
    }, {
        key: '_partials',
        get: function get() {
            return this.constructor._partials;
        }
    }]);

    return Core;
}();

module.exports = Core;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(59);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an button
 *
 * @class
 */

var Button = function (_Core) {
    _inherits(Button, _Core);

    function Button(options) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Button, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'onHover',
        value: function onHover(fn) {
            return this._attachListener("hover", this.el, this.el, fn);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.el.textContent = title;
            this.el.setAttribute("title", title);
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this.el.setAttribute("href", link);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(style) {
            this.el.classList = [];
            this.el.classList = ['hig__button', 'hig__button--' + style];
            this.el.setAttribute("href", link);
        }
    }]);

    return Button;
}(Core);

Button._interface = Interface['basics']['Button'];
Button._defaults = {
    title: "link",
    link: "#",
    style: "default"
};

module.exports = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(34);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(60);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var OPEN_CLASS = 'hig__flyout--open';

/**
 * Creates a flyout
 *
 * @class
 */

var Flyout = function (_Core) {
    _inherits(Flyout, _Core);

    function Flyout(options) {
        _classCallCheck(this, Flyout);

        var _this = _possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Flyout, [{
        key: 'open',
        value: function open() {
            this.el.classList.add(OPEN_CLASS);
        }
    }, {
        key: 'close',
        value: function close() {
            this.el.classList.remove(OPEN_CLASS);
        }
    }, {
        key: 'onClickOutside',
        value: function onClickOutside(fn) {
            return this._attachListener("click", window.document.body, window.document.body, this._callbackIfClickOutside.bind(this, fn));
        }
    }, {
        key: 'addSlot',
        value: function addSlot(slotElement) {
            this.mountPartialToComment('SLOT', slotElement);
        }
    }, {
        key: 'addTarget',
        value: function addTarget(targetElement) {
            this.mountPartialToComment('TARGET', targetElement);
        }
    }, {
        key: '_callbackIfClickOutside',
        value: function _callbackIfClickOutside(callback, event) {
            if (this.el.contains(event.target) || this.el === event.target) {
                return;
            }
            if (this.el.classList.contains(OPEN_CLASS)) {
                callback();
            }
        }
    }]);

    return Flyout;
}(Core);

Flyout._interface = Interface['basics']['Flyout'];
Flyout._defaults = {
    title: "link",
    link: "#"
};

module.exports = Flyout;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(51);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(76);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);
var initials = __webpack_require__(31);

var TYPES = ['account', 'project'];

/**
 * Creates an Project
 *
 * @class
 */

var Item = function (_Core) {
    _inherits(Item, _Core);

    function Item(options) {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, options));

        options.initials = initials(options.label);
        _this.options = options;

        _this._render(Template, options);
        return _this;
    }

    _createClass(Item, [{
        key: '_componentDidMount',
        value: function _componentDidMount() {
            this._setType(this.options._type);
        }
    }, {
        key: 'setImage',
        value: function setImage(imageUrl) {
            this.el.querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image').setAttribute("src", imageUrl);
        }
    }, {
        key: 'setLabel',
        value: function setLabel(label) {
            // Update the label
            this.el.querySelector('.hig__global-nav__top-nav__project-account-switcher__item__label').innerText = label;
            // Update the image alt attribute
            this.el.querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image').setAttribute("alt", label);
            // Update the placeholder image initials
            this.el.querySelector('.hig__global-nav__top-nav__project-account-switcher__item__image-placeholder').innerText = initials(label);
        }
    }, {
        key: '_setType',
        value: function _setType(type) {
            var _this2 = this;

            if (!TYPES.includes(type)) {
                return;
            }

            TYPES.forEach(function (t) {
                _this2.el.classList.remove('hig__global-nav__top-nav__project-account-switcher__item--' + t);
            });

            this.el.classList.add('hig__global-nav__top-nav__project-account-switcher__item--' + type);
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.el.classList.add("hig__global-nav__top-nav__project-account-switcher__item--active");
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.el.classList.remove("hig__global-nav__top-nav__project-account-switcher__item--active");
        }
    }, {
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }]);

    return Item;
}(Core);

Item._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Item._defaults = {
    label: '',
    image: ''
};
Item._partials = {};

module.exports = Item;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

var IconBundle = __webpack_require__(8);

module.exports = IconBundle;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(56);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(81);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Shortcut
 *
 * @class
 */

var Shortcut = function (_Core) {
    _inherits(Shortcut, _Core);

    function Shortcut(options) {
        _classCallCheck(this, Shortcut);

        var _this = _possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Shortcut, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'setIcon',
        value: function setIcon(icon) {
            this._findDOMEl(".hig__global-nav__top-nav__shortcut__link__icon", this.el).innerHTML = this._getIconString(icon);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.el.textContent = title;
            this.el.setAttribute("title", title);
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this.el.setAttribute("href", link);
        }
    }]);

    return Shortcut;
}(Core);

Shortcut._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Shortcut'];
Shortcut._defaults = {
    icon: "",
    title: "",
    link: "#"
};

module.exports = Shortcut;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(36);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(61);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var SideNav = __webpack_require__(16);
var TopNav = __webpack_require__(30);
var SubNav = __webpack_require__(17);

/**
 * Creates an GlobalNav
 *
 * @class
 */

var GlobalNav = function (_Core) {
    _inherits(GlobalNav, _Core);

    function GlobalNav(options) {
        _classCallCheck(this, GlobalNav);

        var _this = _possibleConstructorReturn(this, (GlobalNav.__proto__ || Object.getPrototypeOf(GlobalNav)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(GlobalNav, [{
        key: 'addSideNav',
        value: function addSideNav(sideNavInstance) {
            if (sideNavInstance instanceof SideNav) {
                this.mountPartialToComment('SIDENAV', sideNavInstance);
            }
        }
    }, {
        key: 'addTopNav',
        value: function addTopNav(topNavInstance) {
            if (topNavInstance instanceof TopNav) {
                this.mountPartialToComment('TOPNAV', topNavInstance);
            }
        }
    }, {
        key: 'addSubNav',
        value: function addSubNav(subNavInstance) {
            if (subNavInstance instanceof SubNav) {
                this.mountPartialToComment('SUBNAV', subNavInstance);
            }
        }
    }, {
        key: 'addSlot',
        value: function addSlot(slotElement) {
            this.mountPartialToComment('SLOT', slotElement);
        }
    }, {
        key: 'showSideNav',
        value: function showSideNav() {
            this.el.classList.add("hig__global-nav--open");
        }
    }, {
        key: 'hideSideNav',
        value: function hideSideNav() {
            this.el.classList.remove("hig__global-nav--open");
        }
    }, {
        key: 'onHoverOutside',
        value: function onHoverOutside(fn) {
            return this._attachListener("hover", ".hig__global-nav__container", this.el, fn);
        }
    }]);

    return GlobalNav;
}(Core);

GlobalNav._interface = Interface['components']['GlobalNav'];
GlobalNav._defaults = {};
GlobalNav._partials = {
    SideNav: SideNav,
    TopNav: TopNav,
    SubNav: SubNav
};

module.exports = GlobalNav;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HIGIcons = {};module.exports = HIGIcons;
HIGIcons['account-admin'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"account-admin\"><title>hig-light/globalnav/sidenav/icon/accountadmin</title><path d=\"M18.9340432,10.6494583 C18.6354603,10.6064914 18.3179428,10.3377668 18.2254549,10.0522923 L17.7819499,8.97375239 C17.642854,8.70794072 17.6756253,8.29283758 17.854775,8.05324295 L18.5757437,7.09340795 C18.7548934,6.85308507 18.7410567,6.47148148 18.5415159,6.24718012 L17.7520916,5.45629939 C17.527062,5.25821508 17.1461867,5.2429218 16.9044073,5.42352809 L15.9460288,6.14304021 C15.7057059,6.32364649 15.2920593,6.3564178 15.0255194,6.21659358 L13.9477077,5.77308863 C13.6600485,5.68132899 13.3913238,5.36381149 13.3505417,5.06595678 L13.180131,3.87963567 C13.1386207,3.58178095 12.8589722,3.31305628 12.5611175,3.28101323 C12.5611175,3.28101323 12.3754135,3.2620787 12.0003641,3.2620787 C11.626043,3.2620787 11.440339,3.28101323 11.440339,3.28101323 C11.141756,3.31305628 10.8621076,3.58178095 10.819869,3.87963567 L10.6501865,5.06595678 C10.6079479,5.36381149 10.3392233,5.68132899 10.0530206,5.77308863 L8.97520889,6.21659358 C8.70866898,6.35568954 8.29502233,6.32364649 8.05469945,6.14304021 L7.09486445,5.42279984 C6.85454158,5.24219355 6.47293798,5.25675858 6.24790838,5.45557114 L5.45848414,6.24645187 C5.26039983,6.47148148 5.24437831,6.85235682 5.42498459,7.0926797 L6.14449671,8.0525147 C6.32583125,8.29283758 6.3578743,8.70721247 6.21877833,8.97302414 L5.77381688,10.0522923 C5.68278549,10.338495 5.36453974,10.6072197 5.06668503,10.6494583 L3.88036392,10.8176843 C3.58323746,10.8606511 3.31451279,11.1395713 3.28319799,11.4388825 C3.28319799,11.4388825 3.26353521,11.6245865 3.26353521,11.9996359 C3.26353521,12.3746852 3.28319799,12.5603893 3.28319799,12.5603893 C3.31451279,12.8597005 3.58323746,13.1378924 3.88036392,13.1808592 L5.06668503,13.3498135 C5.36381149,13.3927803 5.68278549,13.661505 5.77381688,13.9469794 L6.21877833,15.0247911 C6.3578743,15.2906028 6.325103,15.7064342 6.14449671,15.9453005 L5.42498459,16.9051355 C5.24437831,17.1454584 5.20068324,17.4724432 5.32885544,17.6290172 C5.45629939,17.7870477 5.82188146,18.176662 5.82260971,18.1781185 C5.82333796,18.179575 5.94714066,18.2917257 6.09570389,18.4286369 C6.24426712,18.5655481 6.85454158,18.7556217 7.09486445,18.5764719 L8.0539712,17.8555033 C8.29429408,17.6763535 8.70794072,17.6421257 8.97448064,17.7826782 L10.0522923,18.2261831 C10.3392233,18.3172145 10.6079479,18.6354603 10.6494583,18.933315 L10.8191408,20.1196361 C10.8613793,20.4167625 11.1402995,20.6869437 11.4396107,20.7182585 C11.4396107,20.7182585 11.6253148,20.7379213 11.9996359,20.7379213 C12.3746852,20.7379213 12.5603893,20.7182585 12.5603893,20.7182585 C12.858244,20.6869437 13.1378924,20.4167625 13.1794027,20.1196361 L13.3498135,18.933315 C13.3913238,18.6361885 13.6600485,18.3172145 13.9469794,18.2261831 L15.0247911,17.7812217 C15.2906028,17.6421257 15.7049777,17.674897 15.9453005,17.8555033 L16.9051355,18.5764719 C17.1469149,18.7556217 17.527062,18.7417849 17.7528199,18.5422441 L18.5407876,17.7528199 C18.7396002,17.5263338 18.7541652,17.1454584 18.5750154,16.9051355 L17.8540468,15.9453005 C17.674897,15.7064342 17.6421257,15.291331 17.7812217,15.0247911 L18.2247266,13.9469794 C18.3172145,13.6607767 18.6340038,13.3920521 18.933315,13.3498135 L20.1181796,13.1808592 C20.4167625,13.1378924 20.6854872,12.8597005 20.716802,12.5603893 C20.716802,12.5603893 20.7364648,12.3746852 20.7364648,11.9996359 C20.7364648,11.6245865 20.716802,11.4388825 20.716802,11.4388825 C20.6854872,11.1402995 20.4167625,10.8606511 20.1181796,10.8176843 L18.9340432,10.6494583 Z M12.0003641,14.981539 C10.3533597,14.981539 9.01846105,13.6456464 9.01846105,11.9996359 C9.01846105,10.3526314 10.3533597,9.0177328 12.0003641,9.0177328 C13.6473686,9.0177328 14.9822672,10.3536254 14.9822672,11.9996359 C14.9822672,13.6456464 13.6463746,14.981539 12.0003641,14.981539 Z\" fill-rule=\"nonzero\" fill=\"#353636\"/></svg>";
HIGIcons['assets'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"assets\"><title>hig-light/globalnav/sidenav/icon/assets</title><g fill=\"#221F20\" fill-rule=\"evenodd\"><path d=\"M10.1898101,0.916614844 L9.67284723,8.01491201 L9.15588441,0.916614844 C9.15588441,0.916614844 7.37499587,-0.81644658 2.12744709,0.48294645 L2.12744709,12.0829042 C2.12744709,12.0829042 6.89296297,11.6014087 8.33744951,12.3725539 C8.33744951,12.3725539 8.29284669,12.9427177 9.66048741,12.950241 L9.67284723,12.950241 L9.68574443,12.950241 C11.0528478,12.9427177 11.0082449,12.3725539 11.0082449,12.3725539 C12.4527315,11.6014087 17.2182474,12.0829042 17.2182474,12.0829042 L17.2182474,0.48294645 C11.9706986,-0.81644658 10.1898101,0.916614844 10.1898101,0.916614844\" transform=\"translate(2.327 4.245)\"/><path d=\"M0.91156344,2.55923464 L0.885231654,13.9028606 L0.455862327,13.4729539 L7.29245378,13.4192155 C7.34887904,13.421365 7.39186971,13.4697296 7.38972017,13.52508 C7.38649587,13.5777436 7.3435052,13.6196595 7.29245378,13.6218091 L0.455862327,14.3333047 C0.229623921,14.3440523 0.0372406687,14.1694027 0.0270303844,13.9442391 L0.0259556176,13.925968 L0.0259556176,13.9028606 L0.000161215016,2.55923464 C-0.000376168371,2.3082766 0.203292135,2.10353353 0.453712794,2.10245876 C0.705745602,2.101384 0.911026056,2.30612707 0.91156344,2.55708511 L0.91156344,2.55923464 Z\" transform=\"translate(2.327 4.245)\"/><path d=\"M19.3458019,2.55923464 L19.3200075,13.9028606 L19.3200075,13.9248933 C19.3183954,14.1516691 19.1351477,14.3343794 18.9089092,14.3343794 L18.8895634,14.3333047 L12.0535094,13.6218091 C11.9970841,13.6196595 11.9540934,13.571295 11.956243,13.5159445 C11.9594673,13.463281 12.002458,13.421365 12.0535094,13.4192155 L18.8895634,13.4729539 L18.4607315,13.9028606 L18.4343997,2.55923464 C18.4333249,2.3082766 18.6375306,2.10353353 18.8879513,2.10245876 C19.1405215,2.101384 19.3452646,2.30612707 19.3458019,2.55708511 L19.3458019,2.55923464 Z\" transform=\"translate(2.327 4.245)\"/></g></svg>";
HIGIcons['authoring-collaboration'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"authoring-collaboration\"><title>hig-light/globalnav/sidenav/icon/authoring-collaboration</title><path d=\"M11.8869602,18.2651991 L8.38987206,18.2934055 C8.38987206,18.2934055 7.01910469,17.7413034 6.82912187,16.8142069 C5.47371833,16.8142069 4.04149565,16.8142069 4.04149565,16.8142069 C4.04149565,16.8142069 3.07720892,16.5159622 3.07720892,15.6011562 C3.07720892,14.6863503 3.74057938,14.4777646 3.74057938,14.4777646 C3.74057938,14.4777646 3.53597614,11.8519197 4.80423538,9.71088832 C5.62198931,8.33038442 7.36611245,6.81686183 8.08540394,6.6742384 C8.08540394,9.18372101 8.17345684,11.7486437 8.17345684,11.7486437 C8.17345684,11.7486437 8.18212997,12.3983628 8.82650215,12.3983628 C9.47087432,12.3983628 9.47087432,11.7570437 9.47087432,11.7570437 L9.44386372,6.14645215 C9.44386372,6.14645215 9.7401401,5.93818778 10.3438306,5.79955896 C10.947521,5.66093014 11.3261805,5.71840503 11.3261805,5.71840503 L11.3165987,12.4444303 C11.3165987,12.4444303 11.2750782,13.1405412 11.9668908,13.1405412 C12.6587035,13.1405412 12.6587035,12.4034029 12.6587035,12.4034029 L12.6587035,5.71840503 C12.6587035,5.71840503 13.0970726,5.70860538 13.6402686,5.82901997 C14.1834647,5.94943456 14.5571275,6.12496579 14.5571275,6.12496579 L14.4830342,11.5684413 C14.4830342,11.5684413 14.439999,12.4804177 15.132858,12.4804177 C15.8257171,12.4804177 15.7942461,11.8075323 15.7942461,11.8075323 L15.8257171,6.6742384 C15.8257171,6.6742384 17.617503,7.81098159 18.8894793,10.1071922 C20.1614556,12.4034029 20.1568299,14.507651 20.1568299,14.507651 C20.1568299,14.507651 20.9227911,14.7697315 20.9227911,15.6011562 C20.9227911,16.432581 20.0392883,16.7091625 20.0392883,16.7091625 L17.1166091,16.7674321 C17.1166091,16.7674321 17.1346162,17.1716055 16.6140633,17.5882463 C16.0935103,18.0048871 15.5514811,18.2522012 15.5514811,18.2522012 L11.8869602,18.2651991 Z\" fill=\"#353636\" fill-rule=\"evenodd\"/></svg>";
HIGIcons['buildingops'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" role=\"img\" title=\"buildingops\"><title>hig-light/globalnav/sidenav/icon/buildingops</title><defs><polygon id=\"a\" points=\"7.62713577 0 0 0 0 7.35425399 15.2542715 7.35425399 15.2542715 0\"/><polygon id=\"c\" points=\"0 5.55203997 0 0.332311051 15.2543663 0.332311051 15.2543663 5.55203997\"/><polygon id=\"e\" points=\"1.28455635e-20 0.467424972 1.28455635e-20 5.68701172 15.2543663 5.68701172 15.2543663 0.467424972\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(4.68 3.47)\"><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><path d=\"M15.251428,2.36864038 C15.2059319,1.05778418 11.8107859,0 7.62704098,0 C3.44329603,0 0.0472021973,1.05778418 0.00170610352,2.36864038 L-0.000189567057,2.36864038 L-0.000189567057,4.96428731 C0.00928878581,6.28509578 3.42007406,7.35425399 7.62704098,7.35425399 C11.8330601,7.35425399 15.2438453,6.28509578 15.2533237,4.96428731 L15.2542715,4.96428731 L15.2542715,2.36864038 L15.251428,2.36864038 Z\" fill=\"#221F20\" mask=\"url(#b)\"/></g><g transform=\"translate(4.68 10.104)\"><mask id=\"d\" fill=\"#fff\"><use xlink:href=\"#c\"/></mask><path d=\"M15.2069746,0.332311051 C14.7885053,1.52990094 11.5544913,2.46304478 7.62713577,2.46304478 C3.69883242,2.46304478 0.46576626,1.52990094 0.0472969808,0.332311051 C0.0202836751,0.40908571 0.0046443929,0.487756038 0.00180088704,0.566426367 L-9.47835286e-05,0.566426367 L-9.47835286e-05,3.1620733 C0.00938356934,4.48193394 3.42016885,5.55203997 7.62713577,5.55203997 C11.8331549,5.55203997 15.2439401,4.48193394 15.2534185,3.1620733 L15.2543663,3.1620733 L15.2543663,0.566426367 L15.2515228,0.566426367 C15.2486793,0.487756038 15.23304,0.40908571 15.2069746,0.332311051\" fill=\"#221F20\" mask=\"url(#d)\"/></g><g transform=\"translate(4.68 14.844)\"><mask id=\"f\" fill=\"#fff\"><use xlink:href=\"#e\"/></mask><path d=\"M15.2069746,0.467424972 C14.7885053,1.66596269 11.5544913,2.5981587 7.62713577,2.5981587 C3.69883242,2.5981587 0.46576626,1.66596269 0.0472969808,0.467424972 C0.0202836751,0.54419963 0.0046443929,0.622869958 0.00180088704,0.702488123 L-9.47835286e-05,0.702488123 L-9.47835286e-05,3.29718722 C0.00938356934,4.61799569 3.42016885,5.68715389 7.62713577,5.68715389 C11.8331549,5.68715389 15.2439401,4.61799569 15.2534185,3.29718722 L15.2543663,3.29718722 L15.2543663,0.702488123 L15.2515228,0.702488123 C15.2486793,0.622869958 15.23304,0.54419963 15.2069746,0.467424972\" fill=\"#221F20\" mask=\"url(#f)\"/></g></g></svg>";
HIGIcons['caret'] = "<svg width=\"10\" height=\"6\" viewBox=\"0 0 10 6\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"caret\"><title>hig/icon/caret</title><polyline points=\"8 11 12 15 16 11\" transform=\"translate(-6.815 -10)\" stroke-width=\"1.5\" stroke=\"#979797\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";
HIGIcons['close-hamburger'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"close-hamburger\"><title>hig_icon_xclose</title><g fill=\"#353636\" fill-rule=\"evenodd\"><rect transform=\"rotate(45 12 12)\" x=\"4\" y=\"11\" width=\"16\" height=\"2\"/><rect transform=\"rotate(-45 12 12)\" x=\"4\" y=\"11\" width=\"16\" height=\"2\"/></g></svg>";
HIGIcons['close-small'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"close-small\"><title>hig/icon/close-small</title><g fill=\"none\" fill-rule=\"evenodd\"><circle stroke=\"#353636\" cx=\"12\" cy=\"12\" r=\"8\"/><polygon fill=\"#353636\" transform=\"rotate(45 12 12)\" points=\"16.5 11.4518414 12.5847458 11.4518414 12.5847458 7.5 11.4152542 7.5 11.4152542 11.4518414 7.5 11.4518414 7.5 12.5226629 11.4152542 12.5226629 11.4152542 16.5 12.5847458 16.5 12.5847458 12.5226629 16.5 12.5226629\"/></g></svg>";
HIGIcons['collapse'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"collapse\"><title>hig/icon/collapse</title><g fill=\"none\" fill-rule=\"evenodd\"><rect stroke=\"#C9D2D7\" x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2\"/><polygon fill=\"#34495E\" points=\"16.0342961 11.2694653 7.96570392 11.2694653 7.96570392 12.7523417 16.0342961 12.7523417\"/></g></svg>";
HIGIcons['construction-management'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"construction-management\"><title>hig/icon/construction-management</title><path d=\"M11.8615301,19.7996624 L7.57771669,19.8342143 C7.57771669,19.8342143 5.89857353,19.1579081 5.66585106,18.0222466 C4.00552806,18.0222466 2.25110424,18.0222466 2.25110424,18.0222466 C2.25110424,18.0222466 1.06988597,17.6569069 1.06988597,16.536301 C1.06988597,15.415695 1.8824921,15.1601847 1.8824921,15.1601847 C1.8824921,15.1601847 1.63186012,11.9436144 3.18543434,9.32092413 C4.18715494,7.62985405 6.32364616,5.77584061 7.20475365,5.60113179 C7.20475365,8.6751622 7.31261545,11.8171048 7.31261545,11.8171048 C7.31261545,11.8171048 7.32323974,12.6129885 8.11257362,12.6129885 C8.9019075,12.6129885 8.9019075,11.8273946 8.9019075,11.8273946 L8.86882044,4.95461167 C8.86882044,4.95461167 9.23174888,4.69949494 9.97124906,4.52967937 C10.7107492,4.35986381 11.1745941,4.43026858 11.1745941,4.43026858 L11.1628568,12.6694196 C11.1628568,12.6694196 11.1119955,13.5221317 11.9594424,13.5221317 C12.8068893,13.5221317 12.8068893,12.6191624 12.8068893,12.6191624 L12.8068893,4.43026858 C12.8068893,4.43026858 13.3438764,4.41826436 14.009273,4.56576811 C14.6746696,4.71327186 15.1323938,4.92829162 15.1323938,4.92829162 L15.041632,11.596363 C15.041632,11.596363 14.9889153,12.713503 15.837644,12.713503 C16.6863727,12.713503 16.6478217,11.8892413 16.6478217,11.8892413 L16.6863727,5.60113179 C16.6863727,5.60113179 18.8812491,6.99360334 20.4393766,9.80638286 C21.9975041,12.6191624 21.9918378,15.1967945 21.9918378,15.1967945 C21.9918378,15.1967945 22.930114,15.5178341 22.930114,16.536301 C22.930114,17.5547678 21.8478534,17.8935708 21.8478534,17.8935708 L18.2676713,17.964949 C18.2676713,17.964949 18.2897293,18.4600476 17.6520698,18.9704183 C17.0144102,19.4807891 16.3504429,19.7837404 16.3504429,19.7837404 L11.8615301,19.7996624 Z\" fill=\"#353636\" fill-rule=\"evenodd\"/></svg>";
HIGIcons['cost-control'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"cost-control\"><title>hig-light/globalnav/sidenav/icon/costcontrol</title><g fill=\"#221F20\" fill-rule=\"evenodd\"><path d=\"M14.1323,8.8506 C13.6123,8.8506 13.1918,8.4286 13.1918,7.9101 C13.1918,7.3896 13.6123,6.9676 14.1323,6.9676 C14.6533,6.9676 15.0738,7.3896 15.0738,7.9101 C15.0738,8.4286 14.6533,8.8506 14.1323,8.8506 M17.2053,5.6571 L12.9343,5.6571 C12.4948,5.6571 12.1393,6.0136 12.1393,6.4531 L12.1393,9.3661 C12.1393,9.8046 12.4948,10.1611 12.9343,10.1611 L17.2053,10.1611 C17.6443,10.1611 17.9998,9.8046 17.9998,9.3661 L17.9998,6.4531 C17.9998,6.0136 17.6443,5.6571 17.2053,5.6571\" transform=\"translate(3 5.25)\"/><path d=\"M0.8242,1.59765 C0.8242,1.10365 1.2247,0.70315 1.7182,0.70315 L16.2462,0.70315 C16.7392,0.70315 17.1397,1.10365 17.1397,1.59765 C17.1397,2.09065 16.7392,2.49115 16.2462,2.49115 L1.7182,2.49115 C1.2247,2.49115 0.8242,2.09065 0.8242,1.59765 L0.8242,1.59765 Z M17.9542,10.96765 C17.8787,11.28915 17.2042,11.18965 16.5892,11.20215 C16.5807,11.20215 16.3832,11.20715 16.0887,11.20915 C16.0687,11.20915 16.0522,11.20615 16.0317,11.20615 L12.4112,11.20615 C11.7262,11.20615 11.1687,10.64965 11.1687,9.96465 L11.1687,5.85465 C11.1687,5.17015 11.7262,4.61315 12.4112,4.61315 L17.4592,4.61315 C17.9567,4.61315 17.9727,4.19815 17.9727,4.19815 L17.9727,1.57215 C17.9727,0.70715 17.2652,0.00015 16.4007,0.00015 L1.5717,0.00015 C0.7077,0.00015 0.0002,0.70715 0.0002,1.57215 L0.0002,12.89165 C0.0002,13.75565 0.7077,14.46265 1.5717,14.46265 L16.4007,14.46265 C17.2652,14.46265 17.9727,13.75565 17.9727,12.89165 L17.9727,12.63765 C17.9727,12.63765 17.9732,12.60665 17.9687,12.55665 L17.9772,10.95715 L17.9542,10.96765 Z\" transform=\"translate(3 5.25)\"/></g></svg>";
HIGIcons['document-management'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"document-management\"><title>hig-light/globalnav/sidenav/icon/document-management</title><g fill=\"#353636\" fill-rule=\"evenodd\"><path d=\"M1.334,16.6455 L12.8955,16.6455 L12.8955,3.8855 L1.334,3.8855 L1.334,16.6455 Z M2.547,0 L0.9695,0 C0.4375,0 0,0.489 0,1.085 L0,16.917 C0,17.5125 0.4375,18 0.9695,18 L13.2595,18 C13.792,18 14.2285,17.5125 14.2285,16.917 L14.2285,1.085 C14.2285,0.489 13.792,0 13.2595,0 L11.6825,0 L2.547,0 Z\" transform=\"translate(5.25 3)\"/><path d=\"M10.96675,6.6025 L3.26175,6.6025 C2.87125,6.6025 2.55375,6.285 2.55375,5.8935 C2.55375,5.503 2.87125,5.1855 3.26175,5.1855 L10.96675,5.1855 C11.35825,5.1855 11.67575,5.503 11.67575,5.8935 C11.67575,6.285 11.35825,6.6025 10.96675,6.6025\" transform=\"translate(5.25 3)\"/><path d=\"M6.956,9.74705 L3.2615,9.74705 C2.871,9.74705 2.5535,9.42855 2.5535,9.03805 C2.5535,8.64655 2.871,8.33005 3.2615,8.33005 L6.956,8.33005 C7.3465,8.33005 7.664,8.64655 7.664,9.03805 C7.664,9.42855 7.3465,9.74705 6.956,9.74705\" transform=\"translate(5.25 3)\"/><path d=\"M6.956,12.8906 L3.2615,12.8906 C2.871,12.8906 2.5535,12.5731 2.5535,12.1826 C2.5535,11.7911 2.871,11.4736 3.2615,11.4736 L6.956,11.4736 C7.3465,11.4736 7.664,11.7911 7.664,12.1826 C7.664,12.5731 7.3465,12.8906 6.956,12.8906\" transform=\"translate(5.25 3)\"/></g></svg>";
HIGIcons['expand'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"expand\"><title>hig/icon/expand</title><g fill=\"none\" fill-rule=\"evenodd\"><rect stroke=\"#C9D2D7\" x=\"4.5\" y=\"4.5\" width=\"15\" height=\"15\" rx=\"2\"/><polygon fill=\"#34495E\" points=\"16.0342961 11.2694653 7.96570392 11.2694653 7.96570392 12.7523417 16.0342961 12.7523417\"/><polygon fill=\"#34495E\" transform=\"rotate(90 12 12.01)\" points=\"16.0342961 11.2694653 7.96570392 11.2694653 7.96570392 12.7523417 16.0342961 12.7523417\"/></g></svg>";
HIGIcons['field'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"field\"><title>hig-light/globalnav/sidenav/icon/field</title><g fill=\"none\" fill-rule=\"evenodd\"><polygon fill=\"#353636\" points=\"16.373112 10.3931228 14.9538313 8.87939369 11.421154 12.6468848 9.60087524 10.706192 8.14107381 12.2620004 11.3585309 15.7394255\"/><rect stroke=\"#353636\" stroke-width=\"1.5\" stroke-linejoin=\"round\" x=\"3.536\" y=\"3.536\" width=\"16.928\" height=\"16.928\" rx=\"8.464\"/></g></svg>";
HIGIcons['gear'] = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"gear\"><path d=\"M19.9368983,10.4543901 C19.5951319,10.4052173 19.2316926,10.0976789 19.1258284,9.77097137 L18.6181803,8.53665041 C18.4589672,8.23244572 18.4964781,7.75738634 18.7015379,7.4831854 L19.5267786,6.38471476 C19.7318385,6.10968038 19.7160005,5.67295912 19.4876006,5.41626037 L18.5840037,4.51114723 C18.3264285,4.28445222 17.8904681,4.26695004 17.6137207,4.47364254 L16.516734,5.2970788 C16.2416538,5.5037713 15.7681824,5.54127599 15.4630934,5.38125599 L14.2294002,4.87369254 C13.9001375,4.76867942 13.5925478,4.40530066 13.5458675,4.06442472 L13.3508107,2.70675501 C13.3032968,2.36587907 12.9832034,2.05834063 12.6422707,2.02166938 C12.6422707,2.02166938 12.4297087,2 12.0004168,2 C11.5719585,2 11.3593965,2.02166938 11.3593965,2.02166938 C11.0176301,2.05834063 10.6975368,2.36587907 10.6491893,2.70675501 L10.454966,4.06442472 C10.4066186,4.40530066 10.0990289,4.76867942 9.77143333,4.87369254 L8.53774017,5.38125599 C8.23265119,5.54044256 7.75917976,5.5037713 7.48409953,5.2970788 L6.38544576,4.4728091 C6.11036552,4.2661166 5.67357146,4.28278535 5.41599633,4.51031379 L4.51239945,5.41542693 C4.28566665,5.67295912 4.26732797,6.10884694 4.47405493,6.38388132 L5.29762847,7.48235196 C5.50518901,7.75738634 5.54186638,8.23161228 5.38265327,8.53581698 L4.87333806,9.77097137 C4.769141,10.0985123 4.40486809,10.4060508 4.06393531,10.4543901 L2.70603926,10.6469142 C2.36594007,10.696087 2.05835035,11.0152936 2.02250656,11.3578364 C2.02250656,11.3578364 2,11.570363 2,11.9995833 C2,12.4288036 2.02250656,12.6413302 2.02250656,12.6413302 C2.05835035,12.983873 2.36594007,13.3022461 2.70603926,13.3514189 L4.06393531,13.5447764 C4.40403451,13.5939492 4.769141,13.9014877 4.87333806,14.2281952 L5.38265327,15.4616827 C5.54186638,15.7658874 5.50435544,16.2417802 5.29762847,16.5151477 L4.47405493,17.6136184 C4.26732797,17.8886527 4.21731338,18.2628662 4.36402284,18.4420553 C4.50989872,18.6229112 4.9283541,19.0688003 4.92918768,19.0704671 C4.93002126,19.072134 5.07172925,19.2004834 5.24177885,19.3571696 C5.41182845,19.5138559 6.11036552,19.7313831 6.38544576,19.5263575 L7.48326595,18.7012543 C7.75834618,18.4962287 8.23181761,18.4570571 8.5369066,18.6179106 L9.77059976,19.125474 C10.0990289,19.2296537 10.4066186,19.5938659 10.4541325,19.9347418 L10.6483558,21.2924116 C10.6967032,21.6324541 11.015963,21.9416594 11.3585629,21.9774972 C11.3585629,21.9774972 11.5711249,22 11.9995832,22 C12.4288751,22 12.6414371,21.9774972 12.6414371,21.9774972 C12.9823699,21.9416594 13.3024632,21.6324541 13.3499771,21.2924116 L13.545034,19.9347418 C13.5925478,19.5946993 13.9001375,19.2296537 14.2285667,19.125474 L15.4622598,18.6162437 C15.7665152,18.4570571 16.2408202,18.4945618 16.5159005,18.7012543 L17.6145542,19.5263575 C17.8913016,19.7313831 18.3264285,19.7155478 18.5848372,19.4871859 L19.486767,18.5837396 C19.7143333,18.3245406 19.7310049,17.8886527 19.5259451,17.6136184 L18.7007044,16.5151477 C18.4956446,16.2417802 18.4581336,15.7667208 18.6173467,15.4616827 L19.1249948,14.2281952 C19.230859,13.9006542 19.5934648,13.5931158 19.9360647,13.5447764 L21.2922936,13.3514189 C21.6340599,13.3022461 21.9416496,12.983873 21.9774934,12.6413302 C21.9774934,12.6413302 22,12.4288036 22,11.9995833 C22,11.570363 21.9774934,11.3578364 21.9774934,11.3578364 C21.9416496,11.016127 21.6340599,10.696087 21.2922936,10.6469142 L19.9368983,10.4543901 Z M12.0004168,15.4121833 C10.1152098,15.4121833 8.58724779,13.8833385 8.58724779,11.9995833 C8.58724779,10.1146905 10.1152098,8.58698322 12.0004168,8.58698322 C13.8856238,8.58698322 15.4135858,10.115828 15.4135858,11.9995833 C15.4135858,13.8833385 13.8844861,15.4121833 12.0004168,15.4121833 Z\" transform=\"translate(-2 -2)\" fill-rule=\"nonzero\" fill=\"#353636\"/></svg>";
HIGIcons['hamburger'] = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"hamburger\"><g transform=\"translate(-92 -185)\" fill=\"none\" fill-rule=\"evenodd\"><rect x=\"92\" y=\"185\" width=\"30\" height=\"30\"/><path d=\"M100,195 L115,195 L115,196 L100,196 L100,195 Z M100,200 L115,200 L115,201 L100,201 L100,200 Z M100,205 L115,205 L115,206 L100,206 L100,205 Z\" fill=\"#34495E\"/></g></svg>";
HIGIcons['help'] = "<svg viewBox=\"0.0 0.0 74 74\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"help\"><clipPath id=\"a\"><path d=\"m0 0l100.0 0l0 100.0l-100.0 0l0 -100.0z\"/></clipPath><g clip-path=\"url(#a)\"><path fill=\"#000\" fill-opacity=\"0\" d=\"m0 0l100.0 0l0 100.0l-100.0 0z\" fill-rule=\"evenodd\"/><path fill=\"#000\" fill-opacity=\"0\" d=\"m2.2283463 35.761154l0 0c0 -18.61243 15.088358 -33.700787 33.700787 -33.700787l0 0c8.938004 0 17.50993 3.5506084 23.830055 9.870732c6.3201256 6.3201227 9.870731 14.892051 9.870731 23.830055l0 0c0 18.61243 -15.088356 33.70079 -33.700787 33.70079l0 0c-18.61243 0 -33.700787 -15.08836 -33.700787 -33.70079z\" fill-rule=\"evenodd\"/><path stroke=\"#000\" stroke-width=\"3\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" d=\"m2.2283463 35.761154l0 0c0 -18.61243 15.088358 -33.700787 33.700787 -33.700787l0 0c8.938004 0 17.50993 3.5506084 23.830055 9.870732c6.3201256 6.3201227 9.870731 14.892051 9.870731 23.830055l0 0c0 18.61243 -15.088356 33.70079 -33.700787 33.70079l0 0c-18.61243 0 -33.700787 -15.08836 -33.700787 -33.70079z\" fill-rule=\"evenodd\"/><path fill=\"#000\" d=\"m38.878353 43.981777l-5.984375 0q-0.015625 -1.296875 -0.015625 -1.578125q0 -2.90625 0.953125 -4.78125q0.96875 -1.875 3.84375 -4.21875q2.890625 -2.34375 3.453125 -3.0625q0.859375 -1.15625 0.859375 -2.53125q0 -1.921875 -1.53125 -3.296875q-1.53125 -1.375 -4.140625 -1.375q-2.5 0 -4.1875 1.4375q-1.6875 1.421875 -2.328125 4.359375l-6.046875 -0.75q0.265625 -4.203125 3.578125 -7.125q3.3125 -2.9375 8.703125 -2.9375q5.671875 0 9.015625 2.96875q3.359375 2.96875 3.359375 6.90625q0 2.171875 -1.234375 4.125q-1.21875 1.9375 -5.25 5.296875q-2.09375 1.734375 -2.59375 2.796875q-0.5 1.046875 -0.453125 3.765625zm-5.984375 8.859375l0 -6.59375l6.59375 0l0 6.59375l-6.59375 0z\"/><path fill=\"#000\" fill-opacity=\"0\" d=\"m69.62992 67.40682l426.6772 0l0 49.76378l-426.6772 0z\" fill-rule=\"evenodd\"/></g></svg>";
HIGIcons['home'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"home\"><title>hig-light/globalnav/sidenav/icon/home</title><path d=\"M18.7567133,12.8199382 C18.7443826,12.8199382 18.5506145,12.6543939 18.3251388,12.4534392 L12.409926,7.16045051 C12.1835695,6.95949576 11.8162908,6.95949576 11.5899344,7.16045051 L5.67472151,12.4534392 C5.44924585,12.6543939 5.25547771,12.8199382 5.24314701,12.8199382 L5.22200867,12.8394139 L5.21672408,12.8633161 L5.21672408,12.8739392 L5.22200867,13.3971298 L5.22200867,19.0769785 C5.22112791,19.361148 5.4827149,19.5948575 5.8006708,19.5948575 L10.2203459,19.5948575 L10.2124191,19.5311185 L10.2124191,15.3836604 C10.2124191,15.0986057 10.4731253,14.8657815 10.791962,14.8657815 L13.2061369,14.8657815 C13.5258543,14.8657815 13.7865605,15.0994909 13.7865605,15.3836604 L13.7865605,19.5311185 L13.7786336,19.5948575 L18.1983088,19.5948575 C18.5171455,19.5948575 18.7778517,19.361148 18.7778517,19.0778638 L18.7778517,13.3971298 L18.7831363,12.8739392 L18.7831363,12.8633161 L18.7778517,12.8394139 L18.7567133,12.8199382 L18.7567133,12.8199382 Z M21.2853876,10.8378338 L16.7010095,6.73640943 L16.699248,6.73463891 L12.6723937,3.13250293 C12.2919035,2.79344712 11.6189996,2.79344712 11.2385095,3.13250293 L2.77084169,10.7085854 C2.37449776,11.0626907 2.32781726,11.551356 2.71359201,11.9151992 C2.82544907,12.0196602 2.97077518,12.0825139 3.12667045,12.1126129 C3.35390764,12.1710402 3.59964087,12.1489087 3.81278583,12.0453329 L3.86210863,12.022316 L3.88412773,12.0116929 C3.98453486,11.9647739 4.08141893,11.9063465 4.16333001,11.833755 L11.5723191,5.20578936 C11.7977948,5.00483461 12.1659543,5.00483461 12.3914299,5.20578936 L19.8418149,11.8656244 L19.9025877,11.9098876 L19.9950679,11.9922171 C20.3517774,12.3109118 20.9304396,12.3109118 21.2862683,11.9922171 C21.6412164,11.672637 21.6412164,11.1565286 21.2853876,10.8378338 L21.2853876,10.8378338 Z\" fill-rule=\"nonzero\" fill=\"#353636\"/></svg>";
HIGIcons['insight'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"insight\"><title>hig-light/globalnav/sidenav/icon/insight</title><g fill=\"#353636\" fill-rule=\"evenodd\"><path d=\"M14.3589603,13.9949825 C14.6335263,14.4299634 14.7869011,14.9378602 14.7869011,15.4739176 C14.7869011,17.0111855 13.5367709,18.2623213 12.0000059,18.2623213 C10.4627381,18.2623213 9.21311082,17.0111855 9.21311082,15.4739176 C9.21311082,14.9388659 9.36648559,14.4299634 9.64054872,13.9949825 L4.60080441,13.9949825 C4.43234359,13.3633801 4.34082159,12.7005999 4.34082159,12.0166993 C4.34082159,7.7936128 7.7764166,4.35801779 12.0000059,4.35801779 C16.2230924,4.35801779 19.6586874,7.7936128 19.6586874,12.0166993 C19.6586874,12.7005999 19.5671654,13.3633801 19.3987046,13.9949825 L14.3589603,13.9949825 Z M3.16231471,12 C3.16231471,16.8734925 7.12699853,20.8376853 12,20.8376853 C16.8725105,20.8376853 20.8376853,16.8734925 20.8376853,12 C20.8376853,7.12699853 16.8725105,3.16231471 12,3.16231471 C7.12699853,3.16231471 3.16231471,7.12699853 3.16231471,12 Z\"/><path d=\"M13.412677,14.5473155 L14.6882496,10.3911485 C14.7785903,10.1171803 14.7108348,9.82651865 14.4442312,9.6929714 C14.4309747,9.68757059 14.4182092,9.68069684 14.4049526,9.67480505 C14.1309844,9.56286104 13.91888,9.73715983 13.7794409,10.0180018 L11.7610118,13.8682867 C11.1983458,13.9625554 10.6955797,14.3327562 10.462854,14.898368 C10.1054188,15.7669161 10.519808,16.7626286 11.388847,17.119082 C12.2573951,17.4770082 13.2526167,17.061637 13.6100519,16.1930889 C13.8427777,15.6269861 13.7470361,15.0093301 13.412677,14.5473155\"/><path d=\"M12,7.60866031 C11.718667,7.60866031 11.4903601,7.38035344 11.4903601,7.09852947 L11.4903601,5.56911893 C11.4903601,5.28680399 11.718667,5.0589881 12,5.0589881 C12.281333,5.0589881 12.5096399,5.28680399 12.5096399,5.56911893 L12.5096399,7.09852947 C12.5096399,7.38035344 12.281333,7.60866031 12,7.60866031\"/><path d=\"M15.6722001,9.26273792 C15.5415987,9.26273792 15.4114883,9.21363966 15.3118189,9.11298825 C15.11248,8.91463131 15.11248,8.59254678 15.3118189,8.39320788 L16.3929624,7.31108242 C16.5923013,7.11272548 16.9148768,7.11272548 17.1142157,7.31108242 C17.3135546,7.5109123 17.3135546,7.83299683 17.1142157,8.03135377 L16.0325812,9.11298825 C15.9329118,9.21363966 15.8028014,9.26273792 15.6722001,9.26273792\"/><path d=\"M8.25440157,9.26273792 C8.12380023,9.26273792 7.99368986,9.21363966 7.89402041,9.11298825 L6.81238593,8.03135377 C6.61304702,7.83299683 6.61304702,7.5109123 6.81238593,7.31108242 C7.01172483,7.11272548 7.33430034,7.11272548 7.53363924,7.31108242 L8.61478274,8.39320788 C8.81412164,8.59254678 8.81412164,8.91463131 8.61478274,9.11298825 C8.51511329,9.21363966 8.38500292,9.26273792 8.25440157,9.26273792\"/></g></svg>";
HIGIcons['layout'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" role=\"img\" title=\"layout\"><title>hig-light/globalnav/sidenav/icon/layout</title><defs><polygon id=\"a\" points=\"18 15.99985 18 0.4405 0.00015 0.4405 0.00015 15.99985 18 15.99985\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(3 3.46)\"><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><path d=\"M16.84765,1.94535 C16.84765,1.75485 16.68565,1.59285 16.49415,1.59285 L1.50565,1.59285 C1.31465,1.59285 1.15215,1.75485 1.15215,1.94535 L1.15215,14.49435 C1.15215,14.68535 1.31465,14.84785 1.50565,14.84785 L16.49415,14.84785 C16.68565,14.84785 16.84765,14.68535 16.84765,14.49435 L16.84765,1.94535 Z M0.00015,14.49435 L0.00015,1.94535 C0.00015,1.11535 0.67465,0.44035 1.50565,0.44035 L16.49415,0.44035 C17.32415,0.44035 18.00015,1.11535 18.00015,1.94535 L18.00015,14.49435 C18.00015,15.32435 17.32415,15.99985 16.49415,15.99985 L1.50565,15.99985 C0.67465,15.99985 0.00015,15.32435 0.00015,14.49435 L0.00015,14.49435 Z\" fill=\"#221F20\" mask=\"url(#b)\"/></g><path d=\"M9.583,13.4209 C9.583,13.6404 9.4035,13.8214 9.1835,13.8214 L2.6495,13.8214 C2.4295,13.8214 2.25,13.6404 2.25,13.4209 L2.25,3.1379 C2.25,2.9179 2.4295,2.7384 2.6495,2.7384 L9.1835,2.7384 C9.4035,2.7384 9.583,2.9179 9.583,3.1379 L9.583,13.4209 Z\" fill=\"#221F20\" transform=\"translate(3 3.4)\"/><path d=\"M15.75,13.4209 C15.75,13.6404 15.5695,13.8214 15.3495,13.8214 L10.9835,13.8214 C10.7635,13.8214 10.583,13.6404 10.583,13.4209 L10.583,9.2734 C10.583,9.0539 10.7635,8.8739 10.9835,8.8739 L15.3495,8.8739 C15.5695,8.8739 15.75,9.0539 15.75,9.2734 L15.75,13.4209 Z\" fill=\"#221F20\" transform=\"translate(3 3.4)\"/><path d=\"M15.75,7.28515 C15.75,7.50465 15.5695,7.68565 15.3495,7.68565 L10.9835,7.68565 C10.7635,7.68565 10.583,7.50465 10.583,7.28515 L10.583,3.13765 C10.583,2.91815 10.7635,2.73815 10.9835,2.73815 L15.3495,2.73815 C15.5695,2.73815 15.75,2.91815 15.75,3.13765 L15.75,7.28515 Z\" fill=\"#221F20\" transform=\"translate(3 3.4)\"/></g></svg>";
HIGIcons['library'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"library\"><title>hig-light/globalnav/sidenav/icon/library</title><g fill=\"#353636\" fill-rule=\"evenodd\"><polygon points=\"7.58193901 6.5 7 7.5 16.3014843 7.5 15.7500732 6.5\"/><polygon points=\"6.58193901 8.5 6 9.5 17.3439948 9.5 16.7773198 8.5\"/><path d=\"M4.55407715,9.69706003 L7.6802593,4.71765137 L16.4136577,4.71765137 C16.4136577,4.71765137 19.2730768,9.47439263 19.4934082,9.69706003 C19.7137396,9.91972744 21,9.69706003 21,9.69706003 L17.2605766,3.92594903 C17.1081482,3.69070388 16.7569278,3.5 16.4749311,3.5 L7.49423011,3.5 C7.21275845,3.5 6.86096067,3.69226116 6.71070423,3.92594903 L3,9.69706003 L4.55407715,9.69706003 Z\"/><path d=\"M3,10.5 L3,19.5 C3,20.052 3.448,20.5 4,20.5 L20,20.5 C20.552,20.5 21,20.052 21,19.5 L21,10.5 L3,10.5 L3,10.5 Z M16,14.5 L8,14.5 L8,13.5 L16,13.5 L16,14.5 L16,14.5 Z\"/></g></svg>";
HIGIcons['locations'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"locations\"><title>hig-light/globalnav/sidenav/icon/locations</title><path d=\"M11.6005253,11.8263289 C10.0543774,11.8263289 8.80026267,10.5722141 8.80026267,9.02606618 C8.80026267,7.47991824 10.0543774,6.22682105 11.6005253,6.22682105 C13.1471821,6.22682105 14.3997705,7.47991824 14.3997705,9.02606618 C14.3997705,10.5722141 13.1471821,11.8263289 11.6005253,11.8263289 M11.5995078,3.42655837 C8.50721193,3.42655837 6,5.9337703 6,9.02606618 C6,10.0476736 6.27829645,11.0016149 6.75552145,11.8263289 L10.7106306,19.8279467 C11.2012629,20.8205496 11.9960273,20.8233293 12.4888605,19.8279467 L16.4506169,11.8263289 C16.9227542,11.0016149 17.1990156,10.0476736 17.1990156,9.02606618 C17.1990156,5.9337703 14.6928212,3.42655837 11.5995078,3.42655837 Z\" fill=\"#353636\" fill-rule=\"evenodd\"/></svg>";
HIGIcons['photos'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"photos\"><title>hig-light/globalnav/sidenav/icon/photos</title><g fill=\"#221F20\" fill-rule=\"evenodd\"><path d=\"M16.3835495,16.9423129 L5.28399952,18.8509504 L3.92456452,10.9392004 L15.023537,9.03171789 L16.3835495,16.9423129 Z M16.0705445,8.26248789 C16.015682,7.94544039 15.7159595,7.73407539 15.400067,7.78720539 L3.15591202,9.89334789 C2.83886452,9.94763289 2.62692202,10.2473554 2.68120702,10.5632479 L4.23814702,19.6207579 C4.29243202,19.9366504 4.59273202,20.1485929 4.90920202,20.0943079 L17.153357,17.9893204 C17.4692495,17.9356129 17.681192,17.6347354 17.6263295,17.3182654 L16.0705445,8.26248789 Z\"/><polygon points=\"12.7008898 13.7863331 11.5458898 15.9369431 8.43836227 13.1123906 5.90775727 17.8259456 15.3591223 16.2014381\"/><path d=\"M13.5484865,11.4724061 C13.662254,12.1330661 13.2193115,12.7596536 12.5586515,12.8734211 C11.8979915,12.9866111 11.271404,12.5430911 11.1576365,11.8830086 C11.043869,11.2229261 11.487389,10.5951836 12.1474715,10.4819936 C12.8081315,10.3693811 13.4352965,10.8117461 13.5484865,11.4724061\"/><path d=\"M20.7468864,3.89720987 L8.32312887,3.89720987 C8.00203887,3.89720987 7.74158637,4.15708487 7.74158637,4.47817487 L7.74158637,7.87907237 L16.4300739,6.38507987 C16.7459664,6.33137237 17.0462664,6.54273737 17.1011289,6.85920737 L18.3710514,14.2483199 L20.7468864,14.2483199 C21.0673989,14.2483199 21.3272739,13.9884449 21.3272739,13.6673549 L21.3272739,4.47817487 C21.3272739,4.15708487 21.0673989,3.89720987 20.7468864,3.89720987\"/></g></svg>";
HIGIcons['placeholder'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" role=\"img\" title=\"placeholder\"><title>hig-light/globalnav/sidenav/icon/placeholder</title><defs><polygon id=\"a\" points=\"8.890075 0 17.78 0 17.78 18 8.890075 18 0.00015 18 0.00015 0\"/></defs><g transform=\"translate(3 3)\" fill=\"none\" fill-rule=\"evenodd\"><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><path d=\"M8.88965885,0.159283711 C8.88965885,0.159283711 0.15748691,4.99810243 0.15748691,10.308426 C0.15748691,14.982218 4.72617263,16.5435867 7.75313566,14.1963766 C7.72808696,14.2366509 7.69419755,14.2739784 7.67700726,14.3162174 L6.50954156,17.1540873 C6.35335558,17.5317824 6.56062126,17.8407163 6.96925881,17.8407163 L10.8110412,17.8407163 C11.2186964,17.8407163 11.4259621,17.5317824 11.2707584,17.1540873 L10.1032927,14.3162174 C10.0861025,14.2739784 10.052213,14.2366509 10.0271643,14.1963766 C13.0541274,16.5435867 17.6228131,14.982218 17.6228131,10.308426 C17.6228131,4.99810243 8.88965885,0.159283711 8.88965885,0.159283711\" fill=\"#221F20\" mask=\"url(#b)\"/></g></svg>";
HIGIcons['project-admin'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"project-admin\"><title>hig-light/globalnav/sidenav/icon/project-admin</title><path d=\"M18.9340432,10.6494583 C18.6354603,10.6064914 18.3179428,10.3377668 18.2254549,10.0522923 L17.7819499,8.97375239 C17.642854,8.70794072 17.6756253,8.29283758 17.854775,8.05324295 L18.5757437,7.09340795 C18.7548934,6.85308507 18.7410567,6.47148148 18.5415159,6.24718012 L17.7520916,5.45629939 C17.527062,5.25821508 17.1461867,5.2429218 16.9044073,5.42352809 L15.9460288,6.14304021 C15.7057059,6.32364649 15.2920593,6.3564178 15.0255194,6.21659358 L13.9477077,5.77308863 C13.6600485,5.68132899 13.3913238,5.36381149 13.3505417,5.06595678 L13.180131,3.87963567 C13.1386207,3.58178095 12.8589722,3.31305628 12.5611175,3.28101323 C12.5611175,3.28101323 12.3754135,3.2620787 12.0003641,3.2620787 C11.626043,3.2620787 11.440339,3.28101323 11.440339,3.28101323 C11.141756,3.31305628 10.8621076,3.58178095 10.819869,3.87963567 L10.6501865,5.06595678 C10.6079479,5.36381149 10.3392233,5.68132899 10.0530206,5.77308863 L8.97520889,6.21659358 C8.70866898,6.35568954 8.29502233,6.32364649 8.05469945,6.14304021 L7.09486445,5.42279984 C6.85454158,5.24219355 6.47293798,5.25675858 6.24790838,5.45557114 L5.45848414,6.24645187 C5.26039983,6.47148148 5.24437831,6.85235682 5.42498459,7.0926797 L6.14449671,8.0525147 C6.32583125,8.29283758 6.3578743,8.70721247 6.21877833,8.97302414 L5.77381688,10.0522923 C5.68278549,10.338495 5.36453974,10.6072197 5.06668503,10.6494583 L3.88036392,10.8176843 C3.58323746,10.8606511 3.31451279,11.1395713 3.28319799,11.4388825 C3.28319799,11.4388825 3.26353521,11.6245865 3.26353521,11.9996359 C3.26353521,12.3746852 3.28319799,12.5603893 3.28319799,12.5603893 C3.31451279,12.8597005 3.58323746,13.1378924 3.88036392,13.1808592 L5.06668503,13.3498135 C5.36381149,13.3927803 5.68278549,13.661505 5.77381688,13.9469794 L6.21877833,15.0247911 C6.3578743,15.2906028 6.325103,15.7064342 6.14449671,15.9453005 L5.42498459,16.9051355 C5.24437831,17.1454584 5.20068324,17.4724432 5.32885544,17.6290172 C5.45629939,17.7870477 5.82188146,18.176662 5.82260971,18.1781185 C5.82333796,18.179575 5.94714066,18.2917257 6.09570389,18.4286369 C6.24426712,18.5655481 6.85454158,18.7556217 7.09486445,18.5764719 L8.0539712,17.8555033 C8.29429408,17.6763535 8.70794072,17.6421257 8.97448064,17.7826782 L10.0522923,18.2261831 C10.3392233,18.3172145 10.6079479,18.6354603 10.6494583,18.933315 L10.8191408,20.1196361 C10.8613793,20.4167625 11.1402995,20.6869437 11.4396107,20.7182585 C11.4396107,20.7182585 11.6253148,20.7379213 11.9996359,20.7379213 C12.3746852,20.7379213 12.5603893,20.7182585 12.5603893,20.7182585 C12.858244,20.6869437 13.1378924,20.4167625 13.1794027,20.1196361 L13.3498135,18.933315 C13.3913238,18.6361885 13.6600485,18.3172145 13.9469794,18.2261831 L15.0247911,17.7812217 C15.2906028,17.6421257 15.7049777,17.674897 15.9453005,17.8555033 L16.9051355,18.5764719 C17.1469149,18.7556217 17.527062,18.7417849 17.7528199,18.5422441 L18.5407876,17.7528199 C18.7396002,17.5263338 18.7541652,17.1454584 18.5750154,16.9051355 L17.8540468,15.9453005 C17.674897,15.7064342 17.6421257,15.291331 17.7812217,15.0247911 L18.2247266,13.9469794 C18.3172145,13.6607767 18.6340038,13.3920521 18.933315,13.3498135 L20.1181796,13.1808592 C20.4167625,13.1378924 20.6854872,12.8597005 20.716802,12.5603893 C20.716802,12.5603893 20.7364648,12.3746852 20.7364648,11.9996359 C20.7364648,11.6245865 20.716802,11.4388825 20.716802,11.4388825 C20.6854872,11.1402995 20.4167625,10.8606511 20.1181796,10.8176843 L18.9340432,10.6494583 Z M12.0003641,14.981539 C10.3533597,14.981539 9.01846105,13.6456464 9.01846105,11.9996359 C9.01846105,10.3526314 10.3533597,9.0177328 12.0003641,9.0177328 C13.6473686,9.0177328 14.9822672,10.3536254 14.9822672,11.9996359 C14.9822672,13.6456464 13.6463746,14.981539 12.0003641,14.981539 Z\" fill-rule=\"nonzero\" fill=\"#353636\"/></svg>";
HIGIcons['project-management'] = "<svg width=\"20\" height=\"21\" viewBox=\"0 0 20 21\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"project-management\"><g transform=\"translate(.242)\" fill=\"#34495E\" fill-rule=\"evenodd\"><path d=\"M15,8.15002717 C14.6738533,8.08382289 14.3400214,8.03878262 14,8.01640228 L14,1 L1,1 L1,17 L6.15002717,17 C6.21952655,17.3423796 6.31234911,17.6762897 6.42676427,18 L0,18 L0,0 L15,0 L15,8.15002717 Z M8.40093151,10 C8.07157864,10.3054873 7.76971094,10.6401947 7.49945072,11 L3,11 L3,10 L8.40093151,10 Z M6.42676427,13 C6.31234911,13.3237103 6.21952655,13.6576204 6.15002717,14 L3,14 L3,13 L6.42676427,13 Z M3,4 L12,4 L12,5 L3,5 L3,4 Z M3,7 L12,7 L12,8 L3,8 L3,7 Z\" fill-rule=\"nonzero\"/><path d=\"M13.5,20 C15.9852814,20 18,17.9852814 18,15.5 C18,13.0147186 15.9852814,11 13.5,11 C11.0147186,11 9,13.0147186 9,15.5 C9,17.9852814 11.0147186,20 13.5,20 Z M13.5,21 C10.4624339,21 8,18.5375661 8,15.5 C8,12.4624339 10.4624339,10 13.5,10 C16.5375661,10 19,12.4624339 19,15.5 C19,18.5375661 16.5375661,21 13.5,21 Z\" fill-rule=\"nonzero\"/><rect x=\"13\" y=\"12\" width=\"1\" height=\"4\"/><rect x=\"13\" y=\"15\" width=\"4\" height=\"1\"/></g></svg>";
HIGIcons['projectmanagement'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"projectmanagement\"><title>hig-light/globalnav/sidenav/icon/projectmanagement</title><path d=\"M18.7218835,9.95008557 L16.0615124,9.95008557 C15.6768579,9.95008557 15.3612918,10.2677045 15.3612918,10.6569526 L15.3612918,11.4689072 L13.1201194,11.4689072 L13.1201194,7.61695307 C13.1201194,6.81065339 12.8745754,6.17353056 12.3890892,5.72254939 C11.753289,5.13255103 10.9046217,5.06846175 10.5694495,5.06846175 C10.5059628,5.06846175 10.4606819,5.07081797 10.4476111,5.07176046 L8.63870815,5.07176046 L8.63870815,4.2244625 C8.63870815,3.83474313 8.32360892,3.51759545 7.93848765,3.51759545 L5.27811653,3.51759545 C4.89252843,3.51759545 4.57789602,3.83474313 4.57789602,4.2244625 L4.57789602,6.91008603 C4.57789602,7.29839166 4.89252843,7.61695307 5.27811653,7.61695307 L7.93848765,7.61695307 C8.32360892,7.61695307 8.63870815,7.29839166 8.63870815,6.91008603 L8.63870815,6.13206103 L10.4588147,6.13206103 L10.4998943,6.13111854 C10.5040956,6.1306473 10.5269695,6.12970481 10.565715,6.12970481 C10.7323675,6.12970481 11.3042142,6.15609451 11.6767315,6.50245936 C11.9376804,6.74515038 12.0697886,7.11978992 12.0697886,7.61695307 L12.0697886,11.4689072 L8.63870815,11.4689072 L8.63870815,10.6569526 C8.63870815,10.2677045 8.32360892,9.95008557 7.93848765,9.95008557 L5.27811653,9.95008557 C4.89252843,9.95008557 4.57789602,10.2677045 4.57789602,10.6569526 L4.57789602,13.3416337 C4.57789602,13.7308818 4.89252843,14.0485007 5.27811653,14.0485007 L7.93848765,14.0485007 C8.32360892,14.0485007 8.63870815,13.7308818 8.63870815,13.3416337 L8.63870815,12.5292078 L12.0851935,12.5292078 L12.0627864,16.4952032 C12.0590519,16.9895389 11.9255432,17.3627647 11.6659948,17.6040419 C11.3056147,17.9372119 10.7739139,17.9730265 10.5619805,17.9730265 C10.5190336,17.9730265 10.490558,17.9711416 10.4723523,17.9711416 L8.63870815,17.9593604 L8.63870815,17.0885002 C8.63870815,16.7001946 8.32360892,16.3816332 7.93848765,16.3816332 L5.27811653,16.3816332 C4.89252843,16.3816332 4.57789602,16.7001946 4.57789602,17.0885002 L4.57789602,19.7755375 C4.57789602,20.1638431 4.89252843,20.4824045 5.27811653,20.4824045 L7.93848765,20.4824045 C8.32360892,20.4824045 8.63870815,20.1638431 8.63870815,19.7755375 L8.63870815,19.0187185 L10.4140005,19.0290859 C10.4406089,19.0309709 10.4924252,19.0333271 10.5638477,19.0333271 C10.8962191,19.0333271 11.7388178,18.9711228 12.3708835,18.3900781 C12.8573033,17.9419244 13.1079823,17.3066865 13.1131172,16.5003869 L13.1369247,12.5292078 L15.3612918,12.5292078 L15.3612918,13.3416337 C15.3612918,13.7308818 15.6768579,14.0485007 16.0615124,14.0485007 L18.7218835,14.0485007 C19.1074716,14.0485007 19.422104,13.7308818 19.422104,13.3416337 L19.422104,10.6569526 C19.422104,10.2677045 19.1074716,9.95008557 18.7218835,9.95008557\" fill=\"#353636\" fill-rule=\"evenodd\"/></svg>";
HIGIcons['quantities'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" role=\"img\" title=\"quantities\"><title>hig-light/globalnav/sidenav/icon/quantities</title><defs><polygon id=\"a\" points=\"19.799835 -5.5e-05 0 -5.5e-05 0 14.577475 19.799835 14.577475\"/></defs><g transform=\"translate(2.1 5.075)\" fill=\"none\" fill-rule=\"evenodd\"><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><path d=\"M12.587135,8.146875 L15.832685,2.184875 L18.945685,8.146875 L12.587135,8.146875 Z M7.201535,8.146875 L0.843535,8.146875 L4.089635,2.184875 L7.201535,8.146875 Z M19.787185,8.146875 L16.275985,1.456675 L16.454735,1.456675 C16.855685,1.456675 17.182935,1.127775 17.182935,0.728475 C17.182935,0.327525 16.855685,-0.000275 16.454735,-0.000275 L3.346035,-0.000275 C2.946185,-0.000275 2.617835,0.327525 2.617835,0.728475 C2.617835,1.127775 2.946185,1.456675 3.346035,1.456675 L3.657885,1.456675 L0.007535,8.213425 C0.004235,8.237075 -0.000165,8.259625 -0.000165,8.283275 C-0.000165,9.464675 1.803835,10.423325 4.028035,10.423325 C6.252785,10.423325 8.056785,9.464675 8.056785,8.283275 C8.056785,8.237075 8.049635,8.193075 8.043585,8.146875 L4.531835,1.456675 L9.171635,1.456675 L9.171635,13.078175 L5.725335,13.078175 C5.174785,13.078175 4.728185,13.524775 4.728185,14.075325 L4.728185,14.577475 L5.064235,14.577475 L14.729385,14.577475 L15.084685,14.577475 L15.084685,14.075325 C15.084685,13.524775 14.638085,13.078175 14.088085,13.078175 L10.628035,13.078175 L10.628035,1.456675 L15.400935,1.456675 L11.750585,8.213425 C11.747835,8.237075 11.743435,8.259625 11.743435,8.283275 C11.743435,9.464675 13.546885,10.423325 15.771635,10.423325 C17.996385,10.423325 19.799835,9.464675 19.799835,8.283275 C19.799835,8.237075 19.793785,8.193075 19.787185,8.146875 L19.787185,8.146875 Z\" fill=\"#221F20\" mask=\"url(#b)\"/></g></svg>";
HIGIcons['schedule'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" role=\"img\" title=\"schedule\"><title>hig-light/globalnav/sidenav/icon/schedule</title><defs><polygon id=\"a\" points=\"0 16.3633 18 16.3633 18 -0.0002 0 -0.0002\"/></defs><g transform=\"translate(3 4.25)\" fill=\"none\" fill-rule=\"evenodd\"><path d=\"M6.46755,8.8877 C6.64905,8.8742 6.81905,8.8342 6.97655,8.7677 C7.13405,8.7002 7.26355,8.6047 7.36555,8.4787 C7.46655,8.3527 7.51805,8.1847 7.51805,7.9747 C7.51805,7.6602 7.41255,7.4182 7.20305,7.2502 C6.99255,7.0822 6.75105,6.9982 6.47805,6.9982 C6.10005,6.9982 5.81505,7.1222 5.62255,7.3702 C5.42955,7.6192 5.33655,7.9327 5.34405,8.3107 L3.92655,8.3107 C3.94055,7.9327 4.00905,7.5877 4.13105,7.2762 C4.25355,6.9647 4.42555,6.6972 4.64605,6.4737 C4.86655,6.2492 5.13005,6.0752 5.43855,5.9532 C5.74705,5.8312 6.08955,5.7697 6.46755,5.7697 C6.76105,5.7697 7.05555,5.8137 7.34955,5.9002 C7.64405,5.9882 7.90755,6.1192 8.14255,6.2947 C8.37705,6.4697 8.56755,6.6827 8.71455,6.9347 C8.86205,7.1867 8.93505,7.4777 8.93505,7.8067 C8.93505,8.1642 8.84955,8.4787 8.67805,8.7522 C8.50605,9.0242 8.24905,9.2102 7.90605,9.3077 L7.90605,9.3292 C8.31155,9.4197 8.63055,9.6162 8.86205,9.9172 C9.09255,10.2177 9.20805,10.5782 9.20805,10.9982 C9.20805,11.3837 9.13305,11.7267 8.98255,12.0272 C8.83205,12.3282 8.63055,12.5802 8.37855,12.7842 C8.12655,12.9862 7.83555,13.1407 7.50705,13.2452 C7.17805,13.3507 6.83505,13.4022 6.47805,13.4022 C6.06455,13.4022 5.68905,13.3437 5.34905,13.2247 C5.01005,13.1057 4.72055,12.9327 4.48355,12.7052 C4.24555,12.4777 4.06155,12.1992 3.93205,11.8702 C3.80205,11.5412 3.74055,11.1632 3.74805,10.7362 L5.16555,10.7362 C5.17255,10.9327 5.20405,11.1192 5.25955,11.2977 C5.31605,11.4767 5.39655,11.6297 5.50155,11.7597 C5.60705,11.8897 5.73805,11.9932 5.89555,12.0692 C6.05305,12.1467 6.23955,12.1847 6.45705,12.1847 C6.79255,12.1847 7.07705,12.0812 7.30755,11.8752 C7.53855,11.6687 7.65405,11.3867 7.65405,11.0292 C7.65405,10.7502 7.60005,10.5372 7.49155,10.3897 C7.38305,10.2422 7.24455,10.1357 7.07705,10.0692 C6.90855,10.0027 6.72455,9.9637 6.52555,9.9542 C6.32605,9.9432 6.13505,9.9377 5.95355,9.9377 L5.95355,8.8877 C6.11355,8.9022 6.28505,8.9022 6.46755,8.8877 Z\" fill=\"#221F20\"/><path d=\"M12.0222,13.26665 L12.0222,8.49915 L10.1742,8.49915 L10.1742,7.37615 C10.4327,7.38265 10.6832,7.36415 10.9252,7.31865 C11.1667,7.27365 11.3837,7.19265 11.5762,7.07715 C11.7682,6.96115 11.9312,6.80865 12.0637,6.62015 C12.1972,6.43065 12.2842,6.19615 12.3267,5.91715 L13.5132,5.91715 L13.5132,13.26665 L12.0222,13.26665 Z\" fill=\"#221F20\"/><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><path d=\"M1.6875,14.8293 L16.3125,14.8293 L16.3125,4.3988 L1.6875,4.3988 L1.6875,14.8293 Z M4.6715,1.2158 C5.224,1.2158 5.6715,1.6638 5.6715,2.2158 C5.6715,2.7683 5.224,3.2158 4.6715,3.2158 C4.1195,3.2158 3.6715,2.7683 3.6715,2.2158 C3.6715,1.6638 4.1195,1.2158 4.6715,1.2158 L4.6715,1.2158 Z M13.3285,1.2158 C13.8805,1.2158 14.3285,1.6638 14.3285,2.2158 C14.3285,2.7683 13.8805,3.2158 13.3285,3.2158 C12.776,3.2158 12.3285,2.7683 12.3285,2.2158 C12.3285,1.6638 12.776,1.2158 13.3285,1.2158 L13.3285,1.2158 Z M16.773,-0.0002 L1.227,-0.0002 C0.553,-0.0002 0,0.5528 0,1.2268 L0,15.1368 C0,15.8108 0.553,16.3633 1.227,16.3633 L16.773,16.3633 C17.447,16.3633 18,15.8108 18,15.1368 L18,1.2268 C18,0.5528 17.447,-0.0002 16.773,-0.0002 L16.773,-0.0002 Z\" fill=\"#221F20\" mask=\"url(#b)\"/></g></svg>";
HIGIcons['search-small'] = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"search-small\"><title>hig/icon/search-small</title><path d=\"M15.8702459,15.1631391 L18.9748737,18.267767 C19.1701359,18.4630291 19.1701359,18.7796116 18.9748737,18.9748737 C18.7796116,19.1701359 18.4630291,19.1701359 18.267767,18.9748737 L15.2403215,15.9474283 C14.0545271,17.2108151 12.3694256,18 10.5,18 C6.91014913,18 4,15.0898509 4,11.5 C4,7.91014913 6.91014913,5 10.5,5 C14.0898509,5 17,7.91014913 17,11.5 C17,12.8587306 16.5831026,14.1200897 15.8702459,15.1631391 Z M16,11.5 C16,8.46243388 13.5375661,6 10.5,6 C7.46243388,6 5,8.46243388 5,11.5 C5,14.5375661 7.46243388,17 10.5,17 C13.5375661,17 16,14.5375661 16,11.5 Z\" fill=\"#353636\" fill-rule=\"evenodd\"/></svg>";
HIGIcons['search'] = "<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" title=\"search\"><g transform=\"translate(-1 -1)\" fill=\"none\" fill-rule=\"evenodd\"><rect fill=\"#353636\" transform=\"rotate(-45 19.196 18.891)\" x=\"18.195\" y=\"13.891\" width=\"2.001\" height=\"10\" rx=\"1\"/><circle stroke=\"#353636\" stroke-width=\"1.5\" cx=\"10\" cy=\"10\" r=\"8\"/></g></svg>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(62);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Link
 *
 * @class
 */

var Link = function (_Core) {
    _inherits(Link, _Core);

    function Link(options) {
        _classCallCheck(this, Link);

        var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Link, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'onHover',
        value: function onHover(fn) {
            return this._attachListener("hover", this.el, this.el, fn);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.el.textContent = title;
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this.el.setAttribute("href", link);
        }
    }]);

    return Link;
}(Core);

Link._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Link'];
Link._defaults = {
    title: "link",
    link: "#"
};

module.exports = Link;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(63);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Search
 *
 * @class
 */

var Search = function (_Core) {
    _inherits(Search, _Core);

    function Search(options) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Search, [{
        key: 'setPlaceholder',
        value: function setPlaceholder(placeholder) {
            this._findDOMEl(".hig__global-nav__side-nav__search__inputholder__input", this.el).setAttribute('placeholder', placeholder);
        }
    }, {
        key: 'setQuery',
        value: function setQuery(query) {
            this._findDOMEl(".hig__global-nav__side-nav__search__inputholder__input", this.el).value = query;
        }
    }, {
        key: 'showClearIcon',
        value: function showClearIcon() {
            this._findDOMEl(".hig__global-nav__side-nav__search__clear", this.el).classList.add("hig__global-nav__side-nav__search__clear--show");
        }
    }, {
        key: 'hideClearIcon',
        value: function hideClearIcon() {
            this._findDOMEl(".hig__global-nav__side-nav__search__clear", this.el).classList.remove("hig__global-nav__side-nav__search__clear--show");
        }
    }, {
        key: 'onClearIconClick',
        value: function onClearIconClick(fn) {
            return this._attachListener("click", '.hig__global-nav__side-nav__search__clear', this.el, fn);
        }
    }, {
        key: 'onInput',
        value: function onInput(fn) {
            return this._attachListener("input", '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
        }
    }, {
        key: 'onFocusIn',
        value: function onFocusIn(fn) {
            return this._attachListener("focusin", '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
        }
    }, {
        key: 'onFocusOut',
        value: function onFocusOut(fn) {
            return this._attachListener("focusout", '.hig__global-nav__side-nav__search__inputholder__input', this.el, fn);
        }
    }]);

    return Search;
}(Core);

Search._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Search'];
Search._defaults = {
    "query": "",
    "placeholder": "Search"
};
Search._partials = {};

module.exports = Search;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(39);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(64);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Collapse
 *
 * @class
 */

var Collapse = function (_Core) {
    _inherits(Collapse, _Core);

    function Collapse(options) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Collapse, [{
        key: 'minimize',
        value: function minimize() {
            this.el.classList.add("hig__global-nav__side-nav__section__collapse--collapsed");
        }
    }, {
        key: 'maximize',
        value: function maximize() {
            this.el.classList.remove("hig__global-nav__side-nav__section__collapse--collapsed");
        }
    }, {
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'show',
        value: function show() {
            this.el.classList.remove("hig__global-nav__side-nav__section__collapse--hide");
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.el.classList.add("hig__global-nav__side-nav__section__collapse--hide");
        }
    }]);

    return Collapse;
}(Core);

Collapse._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Collapse'];
Collapse._defaults = {};
Collapse._partials = {};

module.exports = Collapse;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(40);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(65);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Module = __webpack_require__(13);

/**
 * Creates an Group in a section of the sidenav
 *
 * @class
 */

var Group = function (_Core) {
    _inherits(Group, _Core);

    function Group(options) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Group, [{
        key: 'addModule',
        value: function addModule(ModuleInstance, referenceModule) {
            if (ModuleInstance instanceof Module) {
                this.mountPartialToComment('MODULE', ModuleInstance, referenceModule);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.el.classList.remove("hig__global-nav__side-nav__section__group--hide");
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.el.classList.add("hig__global-nav__side-nav__section__group--hide");
        }
    }]);

    return Group;
}(Core);

Group._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group'];
Group._defaults = {};
Group._partials = {
    Module: Module
};

module.exports = Group;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(66);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Submodule = __webpack_require__(14);

/**
 * Creates an Module
 *
 * @class
 */

var Module = function (_Core) {
    _inherits(Module, _Core);

    function Module(options) {
        _classCallCheck(this, Module);

        var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Module, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", ".hig__global-nav__side-nav__section__group__module__link", this.el, fn);
        }
    }, {
        key: 'onHover',
        value: function onHover(fn) {
            return this._attachListener("hover", this.el, this.el, fn);
        }
    }, {
        key: 'setIcon',
        value: function setIcon(icon) {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__link__icon", this.el).innerHTML = this._getIconString(icon);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__link__title", this.el).textContent = title;
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this._findDOMEl("a", this.el).setAttribute("href", link);
        }
    }, {
        key: 'addSubmodule',
        value: function addSubmodule(SubmoduleInstance, referenceSubmodule) {
            if (SubmoduleInstance instanceof Submodule) {
                this.mountPartialToComment('SUBMODULE', SubmoduleInstance, referenceSubmodule);
            }
        }
    }, {
        key: 'showSubmodules',
        value: function showSubmodules() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodules", this.el).classList.remove("hig__global-nav__side-nav__section__group__module__submodules--hide");
        }
    }, {
        key: 'hideSubmodules',
        value: function hideSubmodules() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodules", this.el).classList.add("hig__global-nav__side-nav__section__group__module__submodules--hide");
        }
    }, {
        key: 'show',
        value: function show() {
            this.el.classList.remove("hig__global-nav__side-nav__section__group__module--hide");
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.el.classList.add("hig__global-nav__side-nav__section__group__module--hide");
        }
    }, {
        key: 'activate',
        value: function activate() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__link", this.el).classList.add("hig__global-nav__side-nav__section__group__module__link--active");
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__link", this.el).classList.remove("hig__global-nav__side-nav__section__group__module__link--active");
        }
    }]);

    return Module;
}(Core);

Module._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module'];
Module._defaults = {
    "icon": "",
    "title": "title",
    "link": "#"
};
Module._partials = {
    Submodule: Submodule
};

module.exports = Module;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(42);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(67);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Submodule
 *
 * @class
 */

var Submodule = function (_Core) {
    _inherits(Submodule, _Core);

    function Submodule(options) {
        _classCallCheck(this, Submodule);

        var _this = _possibleConstructorReturn(this, (Submodule.__proto__ || Object.getPrototypeOf(Submodule)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Submodule, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'onHover',
        value: function onHover(fn) {
            return this._attachListener("hover", this.el, this.el, fn);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__title", this.el).textContent = title;
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this._findDOMEl("a", this.el).setAttribute("href", link);
        }
    }, {
        key: 'show',
        value: function show() {
            this.el.classList.remove("hig__global-nav__side-nav__section__group__module__submodule--hide");
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.el.classList.add("hig__global-nav__side-nav__section__group__module__submodule--hide");
        }
    }, {
        key: 'activate',
        value: function activate() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodule__link", this.el).classList.add("hig__global-nav__side-nav__section__group__module__submodule__link--active");
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this._findDOMEl(".hig__global-nav__side-nav__section__group__module__submodule__link", this.el).classList.remove("hig__global-nav__side-nav__section__group__module__submodule__link--active");
        }
    }]);

    return Submodule;
}(Core);

Submodule._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section']['partials']['Group']['partials']['Module']['partials']['Submodule'];
Submodule._defaults = {
    "title": "Submodule",
    "link": "#"
};
Submodule._partials = {};

module.exports = Submodule;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(68);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Group = __webpack_require__(12);
var Collapse = __webpack_require__(11);

/**
 * Creates an Section in the SideNav
 *
 * @class
 */

var Section = function (_Core) {
    _inherits(Section, _Core);

    function Section(options) {
        _classCallCheck(this, Section);

        var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Section, [{
        key: 'setHeaderLabel',
        value: function setHeaderLabel(label) {
            this._findDOMEl(".hig__global-nav__side-nav__section__header__label", this.el).textContent = label;
        }
    }, {
        key: 'setHeaderName',
        value: function setHeaderName(name) {
            this._findDOMEl(".hig__global-nav__side-nav__section__header__name", this.el).textContent = name;
        }
    }, {
        key: 'addGroup',
        value: function addGroup(groupInstance, referenceInstance) {
            if (groupInstance instanceof Group) {
                this.mountPartialToComment('GROUP', groupInstance, referenceInstance);
            }
        }
    }, {
        key: 'addCollapse',
        value: function addCollapse(CollapseInstance, referenceInstance) {
            if (CollapseInstance instanceof Collapse) {
                this.mountPartialToComment('COLLAPSE', CollapseInstance, referenceInstance);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.el.classList.remove("hig__global-nav__side-nav__section--hide");
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.el.classList.add("hig__global-nav__side-nav__section--hide");
        }
    }]);

    return Section;
}(Core);

Section._interface = Interface['components']['GlobalNav']['partials']['SideNav']['partials']['Section'];
Section._defaults = {
    "headerLabel": "Project",
    "headerName": "X"
};
Section._partials = {
    Group: Group,
    Collapse: Collapse
};

module.exports = Section;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(44);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(69);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Section = __webpack_require__(15);
var Link = __webpack_require__(9);
var Search = __webpack_require__(10);

/**
 * Creates an SideNav
 *
 * @class
 */

var SideNav = function (_Core) {
    _inherits(SideNav, _Core);

    function SideNav() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SideNav);

        var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(SideNav, [{
        key: 'addSection',
        value: function addSection(sectionInstance, referenceInstance) {
            if (sectionInstance instanceof Section) {
                this.mountPartialToComment('SECTION', sectionInstance, referenceInstance);
            }
        }
    }, {
        key: 'addLink',
        value: function addLink(linkInstance, referenceInstance) {
            if (linkInstance instanceof Link) {
                this.mountPartialToComment('LINK', linkInstance, referenceInstance);
            }
        }
    }, {
        key: 'addSearch',
        value: function addSearch(searchInstance, referenceInstance) {
            if (searchInstance instanceof Search) {
                this.mountPartialToComment('SEARCH', searchInstance, referenceInstance);
            }
        }
    }, {
        key: 'setCopyright',
        value: function setCopyright(copyright) {
            this.el.querySelector('.hig__global-nav__sidenav__copyright').innerText = copyright;
        }
    }]);

    return SideNav;
}(Core);

SideNav._interface = Interface['components']['GlobalNav']['partials']['SideNav'];
SideNav._defaults = {
    copyright: String.fromCharCode(169) + " 2017 Autodesk, Inc."
};
SideNav._partials = {
    Section: Section,
    Link: Link,
    Search: Search
};

module.exports = SideNav;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(45);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(70);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Tabs = __webpack_require__(19);

/**
 * Creates an SubNav
 *
 * @class
 */

var SubNav = function (_Core) {
    _inherits(SubNav, _Core);

    function SubNav(options) {
        _classCallCheck(this, SubNav);

        var _this = _possibleConstructorReturn(this, (SubNav.__proto__ || Object.getPrototypeOf(SubNav)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(SubNav, [{
        key: 'setModuleIndicatorName',
        value: function setModuleIndicatorName(name) {
            this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__name', this.el).textContent = name;
            this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__name.hig__global-nav__sub-nav__spacer', this.el).textContent = name;
        }
    }, {
        key: 'setModuleIndicatorIcon',
        value: function setModuleIndicatorIcon(icon) {
            this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__icon', this.el).innerHTML = this._getIconString(icon);
            this._findDOMEl('.hig__global-nav__sub-nav__module-indicator__icon.hig__global-nav__sub-nav__spacer', this.el).innerHTML = this._getIconString(icon);
        }
    }, {
        key: 'addTabs',
        value: function addTabs(tabsInstance) {
            if (tabsInstance instanceof Tabs) {
                this.mountPartialToComment('TABS', tabsInstance);
            }
        }
    }, {
        key: 'onModuleIndicatorClick',
        value: function onModuleIndicatorClick(fn) {
            return this._attachListener("click", '.hig__global-nav__sub-nav__module-indicator', this.el, fn);
        }
    }]);

    return SubNav;
}(Core);

SubNav._interface = Interface['components']['GlobalNav']['partials']['SubNav'];
SubNav._defaults = {
    "moduleIndicatorName": "Module Name",
    "moduleIndicatorIcon": "#"
};
SubNav._partials = {
    Tabs: Tabs
};

module.exports = SubNav;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(46);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(71);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates a Tab
 *
 * @class
 */

var Tab = function (_Core) {
    _inherits(Tab, _Core);

    function Tab(options) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Tab, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'setLabel',
        value: function setLabel(label) {
            this.el.textContent = label;
            this.el.setAttribute("title", label);
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.el.classList.add("hig__global-nav__sub-nav__tabs__tab--active");
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.el.classList.remove("hig__global-nav__sub-nav__tabs__tab--active");
        }
    }]);

    return Tab;
}(Core);

Tab._interface = Interface['components']['GlobalNav']['partials']['SubNav']['partials']['Tabs']['partials']['Tab'];
Tab._defaults = {
    label: 'Tab'
};
Tab._partials = {};

module.exports = Tab;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(47);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(72);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Tab = __webpack_require__(18);

/**
 * Creates a Tabs
 *
 * @class
 */

var Tabs = function (_Core) {
    _inherits(Tabs, _Core);

    function Tabs(options) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Tabs, [{
        key: 'addTab',
        value: function addTab(tabInstance, referenceTab) {
            if (tabInstance instanceof Tab) {
                this.mountPartialToComment('TAB', tabInstance, referenceTab);
            }
        }
    }]);

    return Tabs;
}(Core);

Tabs._interface = Interface['components']['GlobalNav']['partials']['SubNav']['partials']['Tabs'];
Tabs._defaults = {};
Tabs._partials = {
    Tab: Tab
};

module.exports = Tabs;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var Interface = require('interface.json');
//var Template = require('../shortcut/shortcut.html');
var Shortcut = __webpack_require__(6);
var Interface = __webpack_require__(0);

/**
 * Creates an Help
 *
 * @class
 */

var Help = function (_Shortcut) {
    _inherits(Help, _Shortcut);

    function Help(options) {
        _classCallCheck(this, Help);

        options.icon = 'help';
        return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).call(this, options));
    }

    _createClass(Help, [{
        key: 'setLink',
        value: function setLink(link) {
            _get(Help.prototype.__proto__ || Object.getPrototypeOf(Help.prototype), 'setLink', this).call(this, link);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            _get(Help.prototype.__proto__ || Object.getPrototypeOf(Help.prototype), 'setTitle', this).call(this, title);
        }
    }, {
        key: 'onClick',
        value: function onClick(action) {
            _get(Help.prototype.__proto__ || Object.getPrototypeOf(Help.prototype), 'onClick', this).call(this, action);
        }
    }]);

    return Help;
}(Shortcut);

Help._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Help'];

module.exports = Help;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(48);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(73);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Button = __webpack_require__(2);

/**
 * Creates an ProfileFlyoutContent
 *
 * @class
 */

var ProfileFlyoutContent = function (_Core) {
    _inherits(ProfileFlyoutContent, _Core);

    function ProfileFlyoutContent(options) {
        _classCallCheck(this, ProfileFlyoutContent);

        var _this = _possibleConstructorReturn(this, (ProfileFlyoutContent.__proto__ || Object.getPrototypeOf(ProfileFlyoutContent)).call(this, options));

        _this.options = options;
        _this._render(Template, options);
        return _this;
    }

    _createClass(ProfileFlyoutContent, [{
        key: '_componentDidMount',
        value: function _componentDidMount() {
            this.signOutButton = new Button({
                title: this.options.signOutLabel
            });
            this.mountPartialToComment('SIGN_OUT_BUTTON', this.signOutButton);

            this.settingsLink = new Button({
                title: this.options.profileSettingsLabel,
                link: this.options.profileSettingsLink,
                style: 'link'
            });
            this.mountPartialToComment('SETTINGS_LINK', this.settingsLink);
        }
    }, {
        key: 'setEmail',
        value: function setEmail(email) {
            var el = this.el.querySelector('.src__components__global-nav__top-nav__profile__profile-flyout-content__email');
            el.textContent = email;
            el.setAttribute('title', email);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            var el = this.el.querySelector('.src__components__global-nav__top-nav__profile__profile-flyout-content__name');
            el.textContent = name;
            el.setAttribute('title', name);
        }
    }, {
        key: 'setProfileSettingsLabel',
        value: function setProfileSettingsLabel(label) {
            this.settingsLink.setTitle(label);
        }
    }, {
        key: 'setSignOutLabel',
        value: function setSignOutLabel(label) {
            this.signOutButton.setTitle(label);
        }
    }, {
        key: 'setProfileSettingsLink',
        value: function setProfileSettingsLink(link) {
            this.settingsLink.setLink(link);
        }
    }, {
        key: 'setSignOutLink',
        value: function setSignOutLink(link) {
            this.signOutButton.setLink(link);
        }
    }, {
        key: 'onProfileSettingsClick',
        value: function onProfileSettingsClick(fn) {
            return this.settingsLink.onClick(fn);
        }
    }, {
        key: 'onSignOutClick',
        value: function onSignOutClick(fn) {
            return this.signOutButton.onClick(fn);
        }
    }]);

    return ProfileFlyoutContent;
}(Core);

ProfileFlyoutContent._interface = {
    methods: {
        "setEmail": {},
        "setName": {},
        "setProfileSettingsLabel": {},
        "setSignOutLabel": {},
        "setProfileSettingsLink": {},
        "setSignOutLink": {},
        "onProfileSettingsClick": {},
        "onSignOutClick": {}
    },
    defaults: {}
};
ProfileFlyoutContent._defaults = {};

module.exports = ProfileFlyoutContent;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(49);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(74);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates a ProfileImage
 *
 * @class
 */

var ProfileImage = function (_Core) {
    _inherits(ProfileImage, _Core);

    function ProfileImage(options) {
        _classCallCheck(this, ProfileImage);

        var _this = _possibleConstructorReturn(this, (ProfileImage.__proto__ || Object.getPrototypeOf(ProfileImage)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(ProfileImage, [{
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'setImage',
        value: function setImage(imageUrl) {
            this.el.querySelector('.hig__global-nav__top-nav__profile__profile-image__image').setAttribute("src", imageUrl);
        }
    }]);

    return ProfileImage;
}(Core);

ProfileImage._interface = {
    methods: {
        "onClick": {},
        "setImage": {}
    },
    defaults: {}
};
ProfileImage._defaults = {};

module.exports = ProfileImage;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(50);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(75);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Flyout = __webpack_require__(3);
var ProfileImage = __webpack_require__(22);
var ProfileFlyoutContent = __webpack_require__(21);
/**
 * Creates an Profile
 *
 * @class
 *
 */

var Profile = function (_Core) {
  _inherits(Profile, _Core);

  function Profile(options) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, options));

    _this.options = options;
    _this._render(Template, options);
    return _this;
  }

  _createClass(Profile, [{
    key: '_componentDidMount',
    value: function _componentDidMount() {
      this.flyout = new Flyout();
      this.mountPartialToComment('FLYOUT', this.flyout, this.el);
      this.flyoutContent = new ProfileFlyoutContent(this.options);
      this.profileImage = new ProfileImage({ image: this.options.image });
      this.flyout.addSlot(this.flyoutContent);
      this.flyout.addTarget(this.profileImage);
    }

    // bind the supplied fn to click events on this element.

  }, {
    key: 'onProfileImageClick',
    value: function onProfileImageClick(fn) {
      return this.profileImage.onClick(fn);
    }
  }, {
    key: 'open',
    value: function open() {
      this.flyout.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.flyout.close();
    }
  }, {
    key: 'onProfileClickOutside',
    value: function onProfileClickOutside(fn) {
      return this.flyout.onClickOutside(fn);
    }
  }, {
    key: 'setImage',
    value: function setImage(imageUrl) {
      this.profileImage.setImage(imageUrl);
    }
  }, {
    key: 'setEmail',
    value: function setEmail(email) {
      this.flyoutContent.setEmail(email);
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.flyoutContent.setName(name);
    }
  }, {
    key: 'setProfileSettingsLabel',
    value: function setProfileSettingsLabel(label) {
      this.flyoutContent.setProfileSettingsLabel(label);
    }
  }, {
    key: 'setSignOutLabel',
    value: function setSignOutLabel(label) {
      this.flyoutContent.setSignOutLabel(label);
    }
  }, {
    key: 'setProfileSettingsLink',
    value: function setProfileSettingsLink(link) {
      this.flyoutContent.setProfileSettingsLink(link);
    }
  }, {
    key: 'setSignOutLink',
    value: function setSignOutLink(link) {
      this.flyoutContent.setSignOutLink(link);
    }
  }, {
    key: 'onProfileSettingsClick',
    value: function onProfileSettingsClick(fn) {
      return this.flyoutContent.onProfileSettingsClick(fn);
    }
  }, {
    key: 'onSignOutClick',
    value: function onSignOutClick(fn) {
      return this.flyoutContent.onSignOutClick(fn);
    }
  }]);

  return Profile;
}(Core);

Profile._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Profile'];

Profile._defaults = {
  image: 'https://placekitten.com/g/50/50',
  email: 'email@example.com',
  name: 'name',
  profileSettingsLink: 'https://www.autodesk.com',
  profileSettingsLabel: "Profile Settings",
  signOutLabel: "Sign Out"
};

module.exports = Profile;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(52);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(77);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Lists
 *
 * @class
 */

var Lists = function (_Core) {
    _inherits(Lists, _Core);

    function Lists(options) {
        _classCallCheck(this, Lists);

        var _this = _possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Lists, [{
        key: 'addProject',
        value: function addProject(newInstance, referenceInstance) {
            this.mountPartialToComment('PROJECTS', newInstance, referenceInstance);
        }
    }, {
        key: 'addAccount',
        value: function addAccount(newInstance, referenceInstance) {
            this.mountPartialToComment('ACCOUNTS', newInstance, referenceInstance);
        }
    }]);

    return Lists;
}(Core);

Lists._interface = {
    "methods": {
        "addAccount": {},
        "addProject": {}
    }
};
Lists._defaults = {};
Lists._partials = {};

module.exports = Lists;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(53);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(78);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Item = __webpack_require__(4);

/**
 * Creates an Target
 *
 * @class
 */

var Target = function (_Core) {
    _inherits(Target, _Core);

    function Target(options) {
        _classCallCheck(this, Target);

        var _this = _possibleConstructorReturn(this, (Target.__proto__ || Object.getPrototypeOf(Target)).call(this, options));

        _this._render(Template, options);
        _this.item = new Item(options);
        return _this;
    }

    _createClass(Target, [{
        key: '_componentDidMount',
        value: function _componentDidMount() {
            this.mountPartialToComment('ITEM', this.item);
            this._findDOMEl('.hig__global-nav__top-nav__project-account-switcher__target__caret', this.el).innerHTML = this._getIconString('caret');
        }
    }, {
        key: 'setLabel',
        value: function setLabel(label) {
            this.item.setLabel(label);
        }
    }, {
        key: 'setImage',
        value: function setImage(imageUrl) {
            this.item.setImage(imageUrl);
        }
    }, {
        key: 'setType',
        value: function setType(type) {
            this.item._setType(type);
        }
    }, {
        key: 'onClick',
        value: function onClick(fn) {
            return this._attachListener("click", this.el, this.el, fn);
        }
    }, {
        key: 'removeCaret',
        value: function removeCaret() {
            this._findDOMEl('.hig__global-nav__top-nav__project-account-switcher__target__caret', this.el).remove();
        }
    }]);

    return Target;
}(Core);

Target._interface = {
    "methods": {
        "setLabel": {},
        "setImage": {},
        "setType": {},
        "onClick": {},
        "removeCaret": {}
    }
};
Target._defaults = {};
Target._partials = {};

module.exports = Target;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interface = __webpack_require__(0);
var Item = __webpack_require__(4);

/**
 * Creates an Account
 *
 * @class
 */

var Account = function Account(options) {
    _classCallCheck(this, Account);

    options._type = 'account';
    return new Item(options);
};

Account._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Account'];
Account._defaults = {
    "image": "",
    "label": ""
};

module.exports = Account;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(54);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(79);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Button = __webpack_require__(2);
var Flyout = __webpack_require__(3);
var Project = __webpack_require__(28);
var Account = __webpack_require__(26);
var Lists = __webpack_require__(24);
var Target = __webpack_require__(25);

/**
 * Creates an ProjectAccountSwitcher
 *
 * @class
 */

var ProjectAccountSwitcher = function (_Core) {
    _inherits(ProjectAccountSwitcher, _Core);

    function ProjectAccountSwitcher(options) {
        _classCallCheck(this, ProjectAccountSwitcher);

        var _this = _possibleConstructorReturn(this, (ProjectAccountSwitcher.__proto__ || Object.getPrototypeOf(ProjectAccountSwitcher)).call(this, options));

        _this.flyout = new Flyout();
        _this.target = new Target({
            label: options.activeLabel,
            image: options.activeImage,
            _type: options.activeType
        });
        _this.flyoutContent = new Lists();

        _this._render(Template, options);
        return _this;
    }

    _createClass(ProjectAccountSwitcher, [{
        key: '_componentDidMount',
        value: function _componentDidMount() {
            this.mountPartialToComment('FLYOUT', this.flyout);
            this.flyout.addTarget(this.target);
            this.flyout.addSlot(this.flyoutContent);
        }
    }, {
        key: 'addProject',
        value: function addProject(newInstance, referenceInstance) {
            this.flyoutContent.addProject(newInstance, referenceInstance);
        }
    }, {
        key: 'addAccount',
        value: function addAccount(newInstance, referenceInstance) {
            this.flyoutContent.addAccount(newInstance, referenceInstance);
        }
    }, {
        key: 'onClick',
        value: function onClick(fn) {
            return this.target.onClick(fn);
        }
    }, {
        key: 'removeCaretFromTarget',
        value: function removeCaretFromTarget() {
            this.target.removeCaret();
        }
    }, {
        key: 'open',
        value: function open() {
            this.flyout.open();
        }
    }, {
        key: 'close',
        value: function close() {
            this.flyout.close();
        }
    }, {
        key: 'onClickOutside',
        value: function onClickOutside(fn) {
            return this.flyout.onClickOutside(fn);
        }
    }, {
        key: 'setActiveLabel',
        value: function setActiveLabel(label) {
            this.target.setLabel(label);
        }
    }, {
        key: 'setActiveImage',
        value: function setActiveImage(imageUrl) {
            this.target.setImage(imageUrl);
        }
    }, {
        key: 'setActiveType',
        value: function setActiveType(type) {
            this.target.setType(type);
        }
    }]);

    return ProjectAccountSwitcher;
}(Core);

ProjectAccountSwitcher._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher'];
ProjectAccountSwitcher._defaults = {
    "activeImage": "",
    "activeLabel": "",
    "activeType": "project"
};
ProjectAccountSwitcher._partials = {
    Account: Account,
    Project: Project
};

module.exports = ProjectAccountSwitcher;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interface = __webpack_require__(0);
var Item = __webpack_require__(4);

/**
 * Creates an Project
 *
 * @class
 */

var Project = function Project(options) {
    _classCallCheck(this, Project);

    options._type = 'project';
    return new Item(options);
};

Project._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['ProjectAccountSwitcher']['partials']['Project'];
Project._defaults = {
    "image": "",
    "label": ""
};

module.exports = Project;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(55);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(80);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

/**
 * Creates an Search
 *
 * @class
 */

var Search = function (_Core) {
    _inherits(Search, _Core);

    function Search(options) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(Search, [{
        key: 'setPlaceholder',
        value: function setPlaceholder(placeholder) {
            this._findDOMEl(".hig__global-nav__top-nav__search__inputholder__input", this.el).setAttribute('placeholder', placeholder);
        }
    }, {
        key: 'setQuery',
        value: function setQuery(query) {
            this._findDOMEl(".hig__global-nav__top-nav__search__inputholder__input", this.el).value = query;
        }
    }, {
        key: 'showClearIcon',
        value: function showClearIcon() {
            this._findDOMEl(".hig__global-nav__top-nav__search__clear", this.el).classList.add("hig__global-nav__top-nav__search__clear--show");
        }
    }, {
        key: 'hideClearIcon',
        value: function hideClearIcon() {
            this._findDOMEl(".hig__global-nav__top-nav__search__clear", this.el).classList.remove("hig__global-nav__top-nav__search__clear--show");
        }
    }, {
        key: 'onClearIconClick',
        value: function onClearIconClick(fn) {
            return this._attachListener("click", '.hig__global-nav__top-nav__search__clear', this.el, fn);
        }
    }, {
        key: 'onInput',
        value: function onInput(fn) {
            return this._attachListener("input", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
        }
    }, {
        key: 'onFocusIn',
        value: function onFocusIn(fn) {
            return this._attachListener("focusin", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
        }
    }, {
        key: 'onFocusOut',
        value: function onFocusOut(fn) {
            return this._attachListener("focusout", '.hig__global-nav__top-nav__search__inputholder__input', this.el, fn);
        }
    }]);

    return Search;
}(Core);

Search._interface = Interface['components']['GlobalNav']['partials']['TopNav']['partials']['Search'];
Search._defaults = {
    "query": "",
    "placeholder": "Search"
};
Search._partials = {};

module.exports = Search;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(57);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = __webpack_require__(82);
var Interface = __webpack_require__(0);
var Core = __webpack_require__(1);

var Profile = __webpack_require__(23);
var Shortcut = __webpack_require__(6);
var Help = __webpack_require__(20);
var ProjectAccountSwitcher = __webpack_require__(27);
var Search = __webpack_require__(29);

/**
 * Creates an TopNav
 *
 * @class
 */

var TopNav = function (_Core) {
    _inherits(TopNav, _Core);

    function TopNav(options) {
        _classCallCheck(this, TopNav);

        var _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, options));

        _this._render(Template, options);
        return _this;
    }

    _createClass(TopNav, [{
        key: 'onHamburgerClick',
        value: function onHamburgerClick(fn) {
            return this._attachListener("click", '.hig__global-nav__top-nav__hamburger', this.el, fn);
        }
    }, {
        key: 'setLogo',
        value: function setLogo(logo) {
            this._setLogoAttributeForTag("img", "src", logo);
        }
    }, {
        key: 'setLogoLink',
        value: function setLogoLink(link) {
            this._setLogoAttributeForTag("a", "href", link);
        }
    }, {
        key: 'addProfile',
        value: function addProfile(instance) {
            this.mountPartialToComment(this._comment(instance), instance);
        }
    }, {
        key: 'addProjectAccountSwitcher',
        value: function addProjectAccountSwitcher(instance) {
            this.mountPartialToComment(this._comment(instance), instance);
        }
    }, {
        key: 'addShortcut',
        value: function addShortcut(instance) {
            this.mountPartialToComment(this._comment(instance), instance);
        }
    }, {
        key: 'addSearch',
        value: function addSearch(searchInstance, referenceInstance) {
            if (searchInstance instanceof Search) {
                this.mountPartialToComment('SEARCH', searchInstance, referenceInstance);
            }
        }
    }, {
        key: 'addHelp',
        value: function addHelp(instance) {
            this.mountPartialToComment(this._comment(instance), instance);
        }
    }, {
        key: 'sidenavOpen',
        value: function sidenavOpen() {
            this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.add("hig__global-nav__top-nav__hamburger--menuopen");
        }
    }, {
        key: 'sidenavClosed',
        value: function sidenavClosed() {
            this._findDOMEl(".hig__global-nav__top-nav__hamburger", this.el).classList.remove("hig__global-nav__top-nav__hamburger--menuopen");
        }
    }, {
        key: '_setLogoAttributeForTag',
        value: function _setLogoAttributeForTag(tag, attr, val) {
            var scope = this._findDOMEl('.hig__global-nav__top-nav__logo', this.el);
            this._findDOMEl(tag, scope).setAttribute(attr, val);
        }
    }, {
        key: '_comment',
        value: function _comment(instance) {
            var lookup = {
                Profile: "PROFILE",
                ProjectAccountSwitcher: 'PROJECT_ACCOUNT_SWITCHER',
                Shortcut: "SHORTCUT",
                Help: "SHORTCUT"
            };
            return lookup[instance.constructor.name];
        }
    }]);

    return TopNav;
}(Core);

TopNav._interface = Interface['components']['GlobalNav']['partials']['TopNav'];
TopNav._defaults = {
    logo: "link",
    logoLink: "#"
};

TopNav._partials = {
    Profile: Profile,
    ProjectAccountSwitcher: ProjectAccountSwitcher,
    Shortcut: Shortcut,
    Help: Help,
    Search: Search
};

module.exports = TopNav;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initials(phrase) {
         return phrase.split(' ').map(function (word) {
                  return word.charAt(0);
         }).join('').toUpperCase();
}

module.exports = initials;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hig = {};

Hig.Button = __webpack_require__(2);
Hig.Flyout = __webpack_require__(3);
Hig.GlobalNav = __webpack_require__(7);
Hig.Icons = __webpack_require__(5);

module.exports = Hig;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<a href='{{ link }}' class='hig__button hig__button--{{style}}' title='{{ title }}'>{{ title }}</a>"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hig__flyout\">\n    <!--TARGET-->\n    <div class=\"hig__flyout__container\">\n        <div class=\"hig__flyout__chevron\"></div>\n        <div class=\"hig__flyout__panel\">\n            <!--SLOT-->\n        </div>\n    </div>\n</div>"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav'>\n    <!--SIDENAV-->\n    <div class='hig__global-nav__container'>\n        <!--TOPNAV-->\n        <!--SUBNAV-->\n        <div class='hig__global-nav__slot'>\n            <!--SLOT-->\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<a class='hig__global-nav__sidenav__links__link' href='{{ link }}'>{{ title }}</a>"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__search'>\n    <div class='hig__global-nav__side-nav__search__icon'>{{#renderIcon}}search-small{{/renderIcon}}</div>\n    <div class='hig__global-nav__side-nav__search__inputholder'><input class='hig__global-nav__side-nav__search__inputholder__input' type='text' placeholder='{{placeholder}}' value='{{query}}'></div>\n    <div class='hig__global-nav__side-nav__search__clear'>{{#renderIcon}}close-small{{/renderIcon}}</div>\n</div>"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__section__collapse'>\n    <div class='hig__global-nav__side-nav__section__collapse--maximize'>{{#renderIcon}}expand{{/renderIcon}}</div>\n    <div class='hig__global-nav__side-nav__section__collapse--minimize'>{{#renderIcon}}collapse{{/renderIcon}}</div>\n</div>"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__section__group'>\n    <!--MODULE-->\n</div>"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__section__group__module'>\n    <a class='hig__global-nav__side-nav__section__group__module__link' href=\"{{ link }}\">\n        <div class='hig__global-nav__side-nav__section__group__module__link__icon'>{{#renderIcon}}{{ icon }}{{/renderIcon}}</div>\n        <div class='hig__global-nav__side-nav__section__group__module__link__title'>{{ title }}</div>\n    </a>\n    <div class='hig__global-nav__side-nav__section__group__module__submodules hig__global-nav__side-nav__section__group__module__submodules--hide'>\n        <!--SUBMODULE-->\n    </div>\n</div>"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__section__group__module__submodule'>\n    <a class='hig__global-nav__side-nav__section__group__module__submodule__link' href=\"{{ link }}\">{{ title }}</a>\n</div>"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__side-nav__section'>\n    <div class='hig__global-nav__side-nav__section__header'>\n        <span class='hig__global-nav__side-nav__section__header__label'>{{ headerLabel }}</span>\n        <span class='hig__global-nav__side-nav__section__header__name'>{{ headerName }}</span>\n        <!--COLLAPSE-->\n    </div>\n    <!--GROUP-->\n</div>"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__sidenav'>\n    <div class='hig__global-nav__sidenav__scroll'>\n        <!--SEARCH-->\n        <!--SECTION-->\n        <div class='hig__global-nav__sidenav__links'>\n            <!--LINK-->\n        </div>\n        <div class='hig__global-nav__sidenav__copyright'>{{copyright}}</div>\n    </div>\n</div>"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__sub-nav'>\n    <div class='hig__global-nav__sub-nav__module-indicator'>\n        <div class='hig__global-nav__sub-nav__module-indicator__icon'>{{ moduleIndicatorIcon }}</div>\n        <div class='hig__global-nav__sub-nav__module-indicator__name'>{{ moduleIndicatorName }}</div>\n    </div>\n    <!--TABS-->\n    <div class='hig__global-nav__sub-nav__module-indicator'>\n        <div class='hig__global-nav__sub-nav__module-indicator__icon hig__global-nav__sub-nav__spacer'>{{ moduleIndicatorIcon }}</div>\n        <div class='hig__global-nav__sub-nav__module-indicator__name hig__global-nav__sub-nav__spacer'>{{ moduleIndicatorName }}</div>\n    </div>\n</div>\n"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__sub-nav__tabs__tab {{active ? 'hig__global-nav__sub-nav__tabs__tab--active' : ''}}'>{{label}}</div>"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__sub-nav__tabs'>\n    <!--TAB-->\n</div>"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<div class='src__components__global-nav__top-nav__profile__profile-flyout-content'>\n    <div class='src__components__global-nav__top-nav__profile__profile-flyout-content__name'>{{name}}</div>\n    <div class='src__components__global-nav__top-nav__profile__profile-flyout-content__email'>{{email}}</div>\n    <div class=\"src__components__global-nav__top-nav__profile__profile-flyout-content__links\">\n        <!--SIGN_OUT_BUTTON-->\n        <!--SETTINGS_LINK-->\n    </div>\n</div>"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hig__global-nav__top-nav__profile__profile-image\">\n    <img class='hig__global-nav__top-nav__profile__profile-image__image' src=\"{{ image }}\"/>\n</div>"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__profile'>\n    <div class='hig__global-nav__top-nav__group hig__global-nav__top-nav__group--right'>\n        <!--FLYOUT-->\n    </div>\n</div>"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav__project-account-switcher__item'>\n    <span class=\"hig__global-nav__top-nav__project-account-switcher__item__image-wrapper\">\n        <img class=\"hig__global-nav__top-nav__project-account-switcher__item__image\" src=\"{{image}}\" alt=\"{{label}}\" width=\"32\" height=\"32\" />\n        <span class=\"hig__global-nav__top-nav__project-account-switcher__item__image-placeholder\">{{initials}}</span>\n    </span>\n    <span class=\"hig__global-nav__top-nav__project-account-switcher__item__label\">{{label}}</span>\n</div>\n"

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hig__global-nav__top-nav__project-account-switcher__lists\">\n    <div class=\"hig__global-nav__top-nav__project-account-switcher__lists__list\">\n        <!--ACCOUNTS-->\n    </div>\n    <div class=\"hig__global-nav__top-nav__project-account-switcher__lists__list\">\n        <!--PROJECTS-->\n    </div>\n</div>"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav__project-account-switcher__target'>\n    <!--ITEM-->\n    <span class=\"hig__global-nav__top-nav__project-account-switcher__target__caret\"></span>\n</div>"

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav____project-account-switcher'>\n    <!--FLYOUT-->\n</div>"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav__search'>\n    <div class='hig__global-nav__top-nav__search__icon'>{{#renderIcon}}search{{/renderIcon}}</div>\n    <div class='hig__global-nav__top-nav__search__inputholder'><input class='hig__global-nav__top-nav__search__inputholder__input' type='text' placeholder='{{placeholder}}' value='{{query}}'></div>\n    <div class='hig__global-nav__top-nav__search__clear'>{{#renderIcon}}close-small{{/renderIcon}}</div>\n</div>"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav__shortcut'>\n  <a href='{{ link }}' title='{{ title }}' class='hig__global-nav__top-nav__shortcut__link'>\n    <div class='hig__global-nav__top-nav__shortcut__link__icon hig__global-nav__top-nav__shortcut__link__icon--{{ icon }}'>\n      {{#renderIcon}}{{ icon }}{{/renderIcon}}\n    </div>\n  </a>\n</div>"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<div class='hig__global-nav__top-nav'>\n    <div class='hig__global-nav__top-nav__group hig__global-nav__top-nav__group--left'>\n        <div class='hig__global-nav__top-nav__hamburger'>\n            <div class='hig__global-nav__top-nav__hamburger__hamburgericon'>{{#renderIcon}}hamburger{{/renderIcon}}</div>\n            <div class='hig__global-nav__top-nav__hamburger__closeicon'>{{#renderIcon}}close-hamburger{{/renderIcon}}</div>\n        </div>\n        <div class='hig__global-nav__top-nav__logo'>\n            <a href='{{ logoLink }}'>\n                <img src='{{ logo }}'>\n            </a>\n        </div>\n    </div>\n    <!--SEARCH-->\n    <div class=\"hig__global-nav__top-nav__spacer\"></div>\n    <!--PROJECT_ACCOUNT_SWITCHER-->\n    <div class=\"hig__global-nav__top-nav__group hig__global-nav__top-nav__group--right\">\n        <!--SHORTCUT-->\n    </div>\n    <!--PROFILE-->\n</div>"

/***/ })
/******/ ]);
});