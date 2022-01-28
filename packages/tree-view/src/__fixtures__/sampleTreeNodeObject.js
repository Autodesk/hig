import React from "react";
import {
  AddFolder24,
  Folder24,
  Calendar24,
  ProductsAndServices24,
  Report24,
  FileImage24,
  FileVideo24
} from "@hig/icons";

const sampleTreeNodeObject = [
  {
    id: 1,
    parentId: null,
    meta: {
      label: "dbl click to expand/collapse",
      collapsed: false,
      active: false,
      expandByDoubleClick: true,
      icon: <Report24 />
    },
    draggable: true,
    children: [
      {
        id: 2,
        parentId: 1,
        draggable: true,
        meta: {
          label: "Tree Item 2",
          collapsed: false,
          active: false,
          icon: <Folder24 />
        },
        children: [
          {
            id: 3,
            parentId: 2,
            meta: {
              label: "Tree Item 3",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          },
          {
            id: 4,
            parentId: 2,
            draggable: "true",
            meta: {
              label: "Tree Item 4",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 5,
            parentId: 2,
            meta: {
              label: "Tree Item 5",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            },
            children: [
              {
                id: 6,
                parentId: 5,
                meta: {
                  label: "Tree Item 6",
                  collapsed: false,
                  active: false,
                  icon: <AddFolder24 />
                }
              },
              {
                id: 7,
                parentId: 5,
                meta: {
                  label: "Tree Item 7",
                  collapsed: false,
                  active: false,
                  icon: <Report24 />
                },
                children: [
                  {
                    id: 8,
                    parentId: 7,
                    meta: {
                      label: "Tree Item 8",
                      collapsed: false,
                      active: false,
                      icon: <ProductsAndServices24 />
                    }
                  },
                  {
                    id: 9,
                    parentId: 7,
                    meta: {
                      label: "Tree Item 9",
                      collapsed: false,
                      active: false,
                      icon: <FileImage24 />
                    }
                  },
                  {
                    id: 10,
                    parentId: 7,
                    meta: {
                      label: "Tree Item 10",
                      collapsed: false,
                      active: false,
                      icon: null
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 11,
        parentId: 1,
        meta: {
          label: "Tree Item 11",
          collapsed: false,
          active: false,
          icon: <Folder24 />
        },
        children: [
          {
            id: 12,
            parentId: 11,
            meta: {
              label: "Tree Item 12",
              collapsed: false,
              active: false,
              icon: null
            }
          },
          {
            id: 13,
            parentId: 11,
            meta: {
              label: "Tree Item 13",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 14,
            parentId: 11,
            meta: {
              label: "Tree Item 14",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          },
          {
            id: 15,
            parentId: 11,
            meta: {
              label: "Tree Item 15",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            },
            children: [
              {
                id: 16,
                parentId: 15,
                meta: {
                  label: "Tree Item 16",
                  collapsed: false,
                  active: false,
                  icon: <FileVideo24 />
                }
              },
              {
                id: 17,
                parentId: 15,
                meta: {
                  label: "Tree Item 17",
                  collapsed: false,
                  active: false,
                  icon: <Calendar24 />
                }
              },
              {
                id: 18,
                parentId: 15,
                meta: {
                  label: "Tree Item 18",
                  collapsed: false,
                  active: false,
                  icon: <ProductsAndServices24 />
                }
              }
            ]
          }
        ]
      },
      {
        id: 19,
        parentId: 1,
        meta: {
          label: "Tree Item 19",
          collapsed: false,
          active: false,
          icon: <FileImage24 />
        }
      },
      {
        id: 20,
        parentId: 1,
        meta: {
          label: "Tree Item 20",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 21,
        parentId: 1,
        meta: {
          label: "Tree Item 21",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 22,
        parentId: 1,
        meta: {
          label: "Tree Item 22",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        },
        children: [
          {
            id: 220,
            parentId: 22,
            meta: {
              label: "Tree Item 220",
              collapsed: false,
              active: false,
              icon: <AddFolder24 />
            }
          },
          {
            id: 221,
            parentId: 22,
            meta: {
              label: "Tree Item 221",
              collapsed: false,
              active: false,
              icon: <Report24 />
            },
            children: [
              {
                id: 222,
                parentId: 22,
                meta: {
                  label: "Tree Item 222",
                  collapsed: false,
                  active: false,
                  icon: <ProductsAndServices24 />
                }
              },
              {
                id: 223,
                parentId: 22,
                meta: {
                  label: "Tree Item 223",
                  collapsed: false,
                  active: false,
                  icon: <FileImage24 />
                }
              },
              {
                id: 224,
                parentId: 22,
                meta: {
                  label: "Tree Item 224",
                  collapsed: false,
                  active: false,
                  icon: null
                }
              }
            ]
          }
        ]
      },
      {
        id: 23,
        parentId: 1,
        meta: {
          label: "Tree Item 23",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 24,
        parentId: 1,
        meta: {
          label: "Tree Item 24",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 25,
        parentId: 1,
        meta: {
          label: "Tree Item 25",
          collapsed: false,
          active: false,
          icon: <AddFolder24 />
        }
      },
      {
        id: 26,
        parentId: 1,
        meta: {
          label: "Tree Item 26",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 27,
        parentId: 1,
        meta: {
          label: "Tree Item 27",
          collapsed: false,
          active: false,
          icon: <AddFolder24 />
        }
      },
      {
        id: 28,
        parentId: 1,
        meta: {
          label: "Tree Item 28",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 29,
        parentId: 1,
        meta: {
          label: "Tree Item 29",
          collapsed: false,
          active: false,
          icon: <AddFolder24 />
        }
      },
      {
        id: 30,
        parentId: 1,
        meta: {
          label: "Tree Item 30",
          collapsed: false,
          active: false,
          icon: <ProductsAndServices24 />
        },
        children: [
          {
            id: 300,
            parentId: 30,
            meta: {
              label: "Tree Item 300",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 301,
            parentId: 30,
            meta: {
              label: "Tree Item 301",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 302,
            parentId: 30,
            meta: {
              label: "Tree Item 302",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          },
          {
            id: 303,
            parentId: 30,
            meta: {
              label: "Tree Item 303",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 304,
            parentId: 30,
            meta: {
              label: "Tree Item 304",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 305,
            parentId: 30,
            meta: {
              label: "Tree Item 305",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 306,
            parentId: 30,
            meta: {
              label: "Tree Item 307",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          }
        ]
      },
      {
        id: 31,
        parentId: 1,
        meta: {
          label: "Tree Item 31",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      },
      {
        id: 32,
        parentId: 1,
        meta: {
          label: "Tree Item 32",
          collapsed: false,
          active: false,
          icon: <AddFolder24 />
        }
      },
      {
        id: 33,
        parentId: 1,
        meta: {
          label: "Tree Item 33",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        },
        children: [
          {
            id: 330,
            parentId: 33,
            meta: {
              label: "Tree Item 330",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 331,
            parentId: 33,
            meta: {
              label: "Tree Item 331",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 332,
            parentId: 33,
            meta: {
              label: "Tree Item 332",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          },
          {
            id: 333,
            parentId: 33,
            meta: {
              label: "Tree Item 333",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 334,
            parentId: 33,
            meta: {
              label: "Tree Item 334",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 335,
            parentId: 33,
            meta: {
              label: "Tree Item 335",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 336,
            parentId: 33,
            meta: {
              label: "Tree Item 336",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          }
        ]
      },
      {
        id: 34,
        parentId: 1,
        meta: {
          label: "Tree Item 34",
          collapsed: false,
          active: false,
          icon: <ProductsAndServices24 />
        }
      },
      {
        id: 35,
        parentId: 1,
        meta: {
          label: "Tree Item 35",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        },
        children: [
          {
            id: 350,
            parentId: 35,
            meta: {
              label: "Tree Item 350",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 351,
            parentId: 35,
            meta: {
              label: "Tree Item 351",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 352,
            parentId: 35,
            meta: {
              label: "Tree Item 352",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            }
          },
          {
            id: 353,
            parentId: 35,
            meta: {
              label: "Tree Item 353",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 354,
            parentId: 35,
            meta: {
              label: "Tree Item 354",
              collapsed: false,
              active: false,
              icon: <ProductsAndServices24 />
            }
          },
          {
            id: 355,
            parentId: 35,
            meta: {
              label: "Tree Item 355",
              collapsed: false,
              active: false,
              icon: <FileImage24 />
            }
          },
          {
            id: 356,
            parentId: 35,
            meta: {
              label: "Tree Item 356",
              collapsed: false,
              active: false,
              icon: <Calendar24 />
            },
            children: [
              {
                id: 3560,
                parentId: 356,
                meta: {
                  label: "Tree Item 3560",
                  collapsed: false,
                  active: false,
                  icon: <ProductsAndServices24 />
                }
              },
              {
                id: 3561,
                parentId: 356,
                meta: {
                  label: "Tree Item 3561",
                  collapsed: false,
                  active: false,
                  icon: <FileImage24 />
                }
              },
              {
                id: 3562,
                parentId: 356,
                meta: {
                  label: "Tree Item 3562",
                  collapsed: false,
                  active: false,
                  icon: <Calendar24 />
                }
              },
              {
                id: 3563,
                parentId: 356,
                meta: {
                  label: "Tree Item 3563",
                  collapsed: false,
                  active: false,
                  icon: <FileImage24 />
                }
              },
              {
                id: 3564,
                parentId: 356,
                meta: {
                  label: "Tree Item 3564",
                  collapsed: false,
                  active: false,
                  icon: <ProductsAndServices24 />
                }
              },
              {
                id: 3565,
                parentId: 356,
                meta: {
                  label: "Tree Item 3565",
                  collapsed: false,
                  active: false,
                  icon: <FileImage24 />
                }
              },
              {
                id: 3566,
                parentId: 356,
                meta: {
                  label: "Tree Item 3566",
                  collapsed: false,
                  active: false,
                  icon: <Calendar24 />
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 22000,
    parentId: null,
    meta: {
      label: "Tree Item 22000",
      collapsed: false,
      active: false,
      icon: <FileImage24 />
    }
  },
  {
    id: 55000,
    parentId: null,
    meta: {
      label: "Tree Item 55000",
      collapsed: false,
      active: false,
      icon: <Report24 />
    },
    children: [
      {
        id: 550001,
        parentId: 55000,
        meta: {
          label: "Tree Item 550001",
          collapsed: false,
          active: false,
          icon: <Calendar24 />
        }
      }
    ]
  }
];

export { sampleTreeNodeObject as default };
